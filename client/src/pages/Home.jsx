import React, { useState } from "react";
import "../styles/Home.css";
import BooksContainer from "../components/BooksContainer";

function Home({ scrollHeroTop }) {
  return (
    <div className="home">
      <BooksContainer scrollHeroTop={scrollHeroTop} />
    </div>
  );
}

export default Home;
