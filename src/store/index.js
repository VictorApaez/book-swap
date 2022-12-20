// https://redux-toolkit.js.org/introduction/getting-started
import { configureStore } from "@reduxjs/toolkit";
import {
  basketReducer,
  addToBasket,
  removeFromBasket,
} from "./slices/basketSlice";
import { resetState } from "./actions";

const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});

// this is so all exports are from one file location when you import them in your components
export { store, addToBasket, removeFromBasket, resetState };
