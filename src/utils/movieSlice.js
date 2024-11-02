import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "NowPlayingMovies",
  initialState: {
    nowPlayingMovies: null,
    topRatedMovies: null,
    trendingMovies: null,
    upcomingMovies: null,
    comedyMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addComedyMovies: (state, action) => {
      state.comedyMovies = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTopRatedMovies,
  addTrendingMovies,
  addUpcomingMovies,
  addComedyMovies,
  addTrailer,
} = movieSlice.actions;

export default movieSlice.reducer;