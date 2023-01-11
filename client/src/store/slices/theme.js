import { createSlice } from "@reduxjs/toolkit";
const themeSlice = createSlice({
  name: "theme",
  initialState: false,
  reducers: {
    changeTheme(state, action) {
      return action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
