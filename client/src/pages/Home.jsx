import React, { useState } from "react";
import "../styles/Home.css";
import BooksContainer from "../components/BooksContainer";

function Home({ setLoadingPage, loadingPage, setPageNum, pageNum }) {
  return (
    <div className="home">
      <BooksContainer
        setLoadingPage={setLoadingPage}
        loadingPage={loadingPage}
        setPageNum={setPageNum}
        pageNum={pageNum}
      />
    </div>
  );
}

export default Home;
