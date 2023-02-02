import "../styles/App.css";
import Home from "../pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aside from "./Aside";
import Header from "./Header";
import About from "../pages/About";
import SignIn from "../pages/SignIn";
import { useRef } from "react";
import Main from "./Main";

function App() {
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
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main scrollHeroTop={scrollHeroTop}></Main>
                <div className="main-fade-in"></div>
                <div className="app-hero" ref={heroSection}>
                  <Aside scrollHeroTop={scrollHeroTop} />
                  <Home scrollHeroTop={scrollHeroTop} />
                </div>
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
