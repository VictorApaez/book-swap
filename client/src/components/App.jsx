import "../styles/App.css";
import Home from "../pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aside from "./Aside";
import Header from "./Header";
import About from "../pages/About";
import SignIn from "../pages/SignIn";
import { useState } from "react";
import Main from "./Main";

function App() {
  const [toggleAside, setToggleAside] = useState(false);

  return (
    <Router>
      <div className="app" data-theme="dark">
        <Header setToggleAside={setToggleAside} toggleAside={toggleAside} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Aside
                  toggleAside={toggleAside}
                  setToggleAside={setToggleAside}
                />
                <Home />
              </>
            }
          />
          <Route path="/About" element={<About />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Main" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
