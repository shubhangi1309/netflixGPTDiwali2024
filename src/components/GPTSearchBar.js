import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import client from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const searchInput = useRef();
  const selectedLanguage = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
   // search movie in TMDB
   const searchMovieTMDB = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchInput.current.value);
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query: " +
      searchInput.current.value +
      ", only give me names of 5 movies, comma seperated like the example given ahead. Example Result: Sholay, Don, Padmavat, Golmaal, Dangal";
    //make an API call to openAI get Movie results
    const gptResults = await client.chat.completions.create({
      messages: [{ role: "user", content: searchInput.current.value }],
      model: "gpt-3.5-turbo",
    });

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    // For each movie I will SEARCH TMDB API
    const promiseArray = gptResults.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]

    // how to get data out of this PROMISE ARRAY?

    const TMDBresults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ moveiNames: gptMovies, movieResults: TMDBresults })
    );

    console.log(gptResults.choices);
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchInput}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[selectedLanguage].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[selectedLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;