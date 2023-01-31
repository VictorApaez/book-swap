import "../styles/App.css";
import Home from "../pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aside from "./Aside";
import Header from "./Header";
import About from "../pages/About";
import SignIn from "../pages/SignIn";
import { useRef, useState } from "react";
import Main from "./Main";
import LogoAnimation from "./LogoAnimation";

function App() {
  const [toggleAside, setToggleAside] = useState(false);
  const [loadingPage, setLoadingPage] = useState(false);
  const [pageNum, setPageNum] = useState(0);
  const heroSection = useRef();

  function scrollHeroTop() {
    heroSection.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  return (
    <Router>
      <div className="app" data-theme="dark">
        <Header setToggleAside={setToggleAside} toggleAside={toggleAside} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main
                  toggleAside={toggleAside}
                  setToggleAside={setToggleAside}
                  setLoadingPage={setLoadingPage}
                  setPageNum={setPageNum}
                  scrollHeroTop={scrollHeroTop}
                ></Main>
                <div className="main-fade-in"></div>
                <div className="app-hero" ref={heroSection}>
                  <Aside
                    toggleAside={toggleAside}
                    setToggleAside={setToggleAside}
                    setLoadingPage={setLoadingPage}
                    loadingPage={loadingPage}
                    setPageNum={setPageNum}
                    pageNum={pageNum}
                    scrollHeroTop={scrollHeroTop}
                  />
                  <Home
                    setLoadingPage={setLoadingPage}
                    loadingPage={loadingPage}
                    setPageNum={setPageNum}
                    pageNum={pageNum}
                    scrollHeroTop={scrollHeroTop}
                  />
                </div>
              </>
            }
          />
          <Route path="/Main" element={<Main />} />
          <Route path="/testing" element={<LogoAnimation />} />
          <Route path="/About" element={<About />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Main" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
