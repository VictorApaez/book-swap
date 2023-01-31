import React, { useState } from "react";
import "../styles/Home.css";
import BooksContainer from "../components/BooksContainer";

function Home({
  setLoadingPage,
  loadingPage,
  setPageNum,
  pageNum,
  scrollHeroTop,
}) {
  return (
    <div className="home">
      <BooksContainer
        setLoadingPage={setLoadingPage}
        loadingPage={loadingPage}
        setPageNum={setPageNum}
        pageNum={pageNum}
        scrollHeroTop={scrollHeroTop}
      />
    </div>
  );
}

export default Home;
