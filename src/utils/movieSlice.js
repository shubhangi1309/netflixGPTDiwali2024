import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "NowPlayingMovies",
  initialState: {
    nowPlayingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
  },
});

export const { addNowPlayingMovies } = movieSlice.actions;

export default movieSlice.reducer;