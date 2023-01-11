import React, { useEffect, useRef, useState } from "react";
import { getBookBySubject } from "../services/subject";
import BookCard from "./BookCard";
import "../styles/BooksContainer.css";
import { useDispatch, useSelector } from "react-redux";

function BooksContainer() {
  const BooksContainer = useRef();
  const [pageNum, setPageNum] = useState(0);
  const [loadingPage, setLoadingPage] = useState(false);
  const subject = useSelector((state) => {
    return state.showBooks;
  });
  const [books, setBooks] = useState();
  useEffect(async () => {
    setPageNum(0);
    setLoadingPage(true);
    let res = await getBookBySubject(subject, 0);
    setLoadingPage(false);
    setBooks(res.items);
  }, [subject]);

  useEffect(async () => {
    setLoadingPage(true);
    let res = await getBookBySubject(subject, pageNum);
    setLoadingPage(false);
    setBooks(res.items);
  }, [pageNum]);

  function handlePageDown() {
    if (pageNum > 0 && !loadingPage) setPageNum(pageNum - 20);
    BooksContainer.current.scrollTop = 0;
  }
  function handlePageUp() {
    if (!loadingPage) setPageNum(pageNum + 20);
    BooksContainer.current.scrollTop = 0;
  }
  return (
    <div className="books-wrapper" ref={BooksContainer}>
      <h1>{subject && subject.toUpperCase()}</h1>
      <div className="books-container">
        {books &&
          books.map((book, i) => {
            return <BookCard key={i} data={book} loadingPage={loadingPage} />;
          })}
      </div>
      <div className="page-number-container">
        <span className="material-symbols-outlined" onClick={handlePageDown}>
          arrow_back_ios
        </span>
        <p>{pageNum / 20}</p>
        <span className="material-symbols-outlined" onClick={handlePageUp}>
          arrow_forward_ios
        </span>
      </div>
    </div>
  );
}

export default BooksContainer;
