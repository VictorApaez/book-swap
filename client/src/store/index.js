// https://redux-toolkit.js.org/introduction/getting-started
import { configureStore } from "@reduxjs/toolkit";
import { showBooksReducer, addToShowBooks } from "./slices/showBooks.js";
import { resetState } from "./actions";

const store = configureStore({
  reducer: {
    showBooks: showBooksReducer,
  },
});

// this is so all exports are from one file location when you import them in your components
export { store, addToShowBooks, resetState };
