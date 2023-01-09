import { createSlice } from "@reduxjs/toolkit";
const showBooksSlice = createSlice({
  name: "showBooks",
  initialState: "Horror",
  reducers: {
    addToShowBooks(state, action) {
      return action.payload;
    },
    reset(state, action) {
      return [];
    },
    setSubject(state, action) {
      return action.payload;
    },
  },
});

//deconstruction because actions is an object
export const { addToShowBooks, setSubject } = showBooksSlice.actions;
export const showBooksReducer = showBooksSlice.reducer;
