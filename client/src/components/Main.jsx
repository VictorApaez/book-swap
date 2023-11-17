import { CarouselContainer } from "./CarouselContainer";
import React, { useState, useEffect } from "react";
import "../styles/Main.css";
import "../styles/Carousel.css";
import { SearchBar } from "../components/SearchBar";
import LogoAnimation from "./LogoAnimation";

function Main({ scrollHeroTop }) {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsAnimating(false);
    }, 400);
  }, []);

  let animate = {
    opacity: isAnimating ? "1" : "0",
    zIndex: isAnimating ? "3" : "1",
  };
  return (
    <div className="main-wrapper">
      <div className="main-overlay ">
        <div className="main-overlay-bg-animation" style={animate}></div>
        <LogoAnimation></LogoAnimation>
        <div className="main-search-bar">
          <SearchBar
            scrollHeroTop={scrollHeroTop}
            initialToggle={false}
          ></SearchBar>
        </div>
      </div>
      <CarouselContainer />
    </div>
  );
}

export default Main;
