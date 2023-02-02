// https://redux-toolkit.js.org/introduction/getting-started
import { configureStore } from "@reduxjs/toolkit";

import { themeReducer, changeTheme } from "./slices/theme.js";
import { resetState } from "./actions";
import { updateBooks, booksReducer } from "./slices/Books.js";
import { asideReducer, toggleAside } from "./slices/aside.js";
import { loadingPageReducer, toggleLoadingPage } from "./slices/loadingPage.js";
import { pageNumReducer, updatePageNum } from "./slices/pageNum.js";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    books: booksReducer,
    aside: asideReducer,
    loadingPage: loadingPageReducer,
    pageNum: pageNumReducer,
  },
});

// this is so all exports are from one file location when you import them in your components
export {
  store,
  changeTheme,
  resetState,
  updateBooks,
  toggleAside,
  toggleLoadingPage,
  updatePageNum,
};
