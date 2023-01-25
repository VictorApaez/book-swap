import { createSlice } from "@reduxjs/toolkit";
const booksSlice = createSlice({
  name: "books",
  initialState: { subject: "none", data: {} },
  reducers: {
    updateBooks(state, action) {
      return action.payload;
    },
    reset(state, action) {
      return [];
    },
  },
});

//deconstruction because actions is an object
export const { updateBooks } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
