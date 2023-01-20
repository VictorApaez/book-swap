import "../styles/App.css";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aside from "./Aside";
import Header from "./Header.js";
import { useState } from "react";

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
