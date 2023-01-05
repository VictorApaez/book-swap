import React, { useState } from "react";
import "../styles/Home.css";
import BooksContainer from "./BooksContainer";

function Home() {
  const [subject, setSubject] = useState("horror");

  return (
    <div className="home">
      <BooksContainer subject={subject}></BooksContainer>
    </div>
  );
}

export default Home;
