import { createSlice } from "@reduxjs/toolkit";
const loadingPageSlice = createSlice({
  name: "loadingPage",
  initialState: false,
  reducers: {
    toggleLoadingPage(state, action) {
      return !state;
    },
  },
});

export const { toggleLoadingPage } = loadingPageSlice.actions;
export const loadingPageReducer = loadingPageSlice.reducer;
