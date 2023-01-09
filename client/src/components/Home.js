import React, { useState } from "react";
import "../styles/Home.css";
import BooksContainer from "./BooksContainer";

function Home() {
  return (
    <div className="home">
      <BooksContainer></BooksContainer>
    </div>
  );
}

export default Home;
