import { createSlice } from "@reduxjs/toolkit";
const asideSlice = createSlice({
  name: "aside",
  initialState: false,
  reducers: {
    toggleAside(state, action) {
      return !state;
    },
  },
});

export const { toggleAside } = asideSlice.actions;
export const asideReducer = asideSlice.reducer;
