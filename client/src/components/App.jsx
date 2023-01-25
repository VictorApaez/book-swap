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
  const [loadingPage, setLoadingPage] = useState(false);
  const [pageNum, setPageNum] = useState(0);

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
                  setLoadingPage={setLoadingPage}
                  loadingPage={loadingPage}
                  setPageNum={setPageNum}
                  pageNum={pageNum}
                />
                <Home
                  setLoadingPage={setLoadingPage}
                  loadingPage={loadingPage}
                  setPageNum={setPageNum}
                  pageNum={pageNum}
                />
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
