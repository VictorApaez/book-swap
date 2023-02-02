import { createSlice } from "@reduxjs/toolkit";
const pageNumSlice = createSlice({
  name: "pageNum",
  initialState: 0,
  reducers: {
    updatePageNum(state, action) {
      console.log(state);

      return action.payload;
    },
  },
});

export const { updatePageNum } = pageNumSlice.actions;
export const pageNumReducer = pageNumSlice.reducer;
