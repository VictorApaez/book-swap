import { CarouselContainer } from "./CarouselContainer";
import React, { useState, useEffect } from "react";
import "../styles/Main.css";
import "../styles/Carousel.css";
import { SearchBar } from "../components/SearchBar";
import LogoAnimation from "./LogoAnimation";

function Main() {
  const images = [
    "https://books.google.com/books/content?id=oLr2iVoNENAC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "https://books.google.com/books/content?id=3Hr5ONX-2G8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "https://books.google.com/books/content?id=FLFPCqyuU_EC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "https://books.google.com/books/content?id=Mht4vgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "https://books.google.com/books/content?id=gHcEDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "https://books.google.com/books/content?id=RQDiooLMQq8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "https://books.google.com/books/content?id=eEvlswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "https://books.google.com/books/content?id=EL_R7Tiig74C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "https://books.google.com/books/content?id=L2ylzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "https://books.google.com/books/content?id=QNBrzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "https://books.google.com/books/content?id=L2ylzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "https://books.google.com/books/content?id=QNBrzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  ];
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsAnimating(false);
    }, 2600);
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
          <SearchBar></SearchBar>
        </div>
      </div>
      <CarouselContainer images={images} />
    </div>
  );
}

export default Main;
