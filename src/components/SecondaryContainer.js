import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  
  if (!movies) return; //early return
  return (
    <div className="bg-black">
      <div className="-mt-52 pl-12 relative z-20">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Top Rated" movies={movies.topRatedMovies} />
        <MovieList title="Upcoming Movie" movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;