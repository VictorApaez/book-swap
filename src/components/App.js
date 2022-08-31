import "../styles/App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import SignIn from "./SignIn";
import { auth } from "../firebase.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useContext } from "react";
import { StateContext } from "../StateProvider.js";

function App() {
  const [{}, dispatch] = useContext(StateContext);
  useEffect(() => {
    // will only run once
    // this is a listener
    auth.onAuthStateChanged((authUser) => {
      console.log("this is the user--->", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route path="logIn" element={<SignIn />} />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
