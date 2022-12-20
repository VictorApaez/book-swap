import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
// import { StateProvider } from "./StateProvider";
// import reducer, { initialState } from "./reducer";

import { store } from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
