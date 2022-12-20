import { createSlice } from "@reduxjs/toolkit";
const basketSlice = createSlice({
  name: "basket",
  initialState: [],
  reducers: {
    addToBasket(state, action) {
      state.push(action.payload);
    },
    removeFromBasket(state, action) {
      const i = state.findIndex((item) => item.id === action.payload.id);
      console.log(state);
      console.log(action.payload);
      state.splice(i, 1);
    },
    reset(state, action) {
      return [];
    },
  },
});

//deconstruction because actions is an object
export const { addToBasket, removeFromBasket } = basketSlice.actions;
export const basketReducer = basketSlice.reducer;
