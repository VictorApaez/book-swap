import React, { useEffect, useRef, useState } from "react";
import { getBookBySubject, getBooksByAny } from "../services/books.js";
import { updateBooks } from "../store/index.js";
import BookCard from "./BookCard";
import "../styles/BooksContainer.css";
import { useDispatch, useSelector } from "react-redux";

function BooksContainer({
  setLoadingPage,
  loadingPage,
  pageNum,
  setPageNum,
  scrollHeroTop,
}) {
  const BooksContainer = useRef();
  const books = useSelector((state) => state.books.data);
  const subject = useSelector((state) => state.books.subject);
  const customSearch = useSelector((state) => state.books.customSearch);
  const dispatch = useDispatch();

  useEffect(async () => {
    setLoadingPage(true);
    setPageNum(0);
    let res = await getBookBySubject("Horror", 0);
    dispatch(updateBooks({ subject: "Horror", data: res.items }));
    setLoadingPage(false);
  }, []);

  useEffect(async () => {
    // scrollHeroTop();
    setLoadingPage(true);
    let res;
    if (customSearch) {
      res = await getBooksByAny(subject, pageNum);
    } else {
      res = await getBookBySubject(subject, pageNum);
    }
    dispatch(
      updateBooks({
        subject: subject,
        data: res.items,
        customSearch: customSearch,
      })
    );
    setLoadingPage(false);
  }, [pageNum]);

  function handlePageDown() {
    if (pageNum > 0 && !loadingPage) {
      setPageNum(pageNum - 20);
      scrollHeroTop();
    }
  }
  function handlePageUp() {
    if (!loadingPage) {
      setPageNum(pageNum + 20);
      scrollHeroTop();
    }
  }

  return (
    <div className="books-wrapper" ref={BooksContainer}>
      <h1>{subject && subject.toUpperCase()}</h1>
      <div className="books-container">
        {books?.length > 0 &&
          books.map((book, i) => {
            return <BookCard key={i} data={book} loadingPage={loadingPage} />;
          })}
      </div>
      <div className="page-number-container">
        <span className="material-symbols-outlined" onClick={handlePageDown}>
          arrow_back_ios
        </span>
        <p>{pageNum / 20 + 1}</p>
        <span className="material-symbols-outlined" onClick={handlePageUp}>
          arrow_forward_ios
        </span>
      </div>
    </div>
  );
}

export default BooksContainer;
