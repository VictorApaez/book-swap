import { createSlice } from "@reduxjs/toolkit";
const showBooksSlice = createSlice({
  name: "showBooks",
  initialState: {},
  reducers: {
    addToShowBooks(state, action) {
      return action.payload;
    },
    reset(state, action) {
      return [];
    },
  },
});

//deconstruction because actions is an object
export const { addToShowBooks } = showBooksSlice.actions;
export const showBooksReducer = showBooksSlice.reducer;
