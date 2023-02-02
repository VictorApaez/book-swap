import React, { useEffect, useRef, useState } from "react";
import "../styles/BooksContainer.css";
import { getBookBySubject, getBooksByAny } from "../services/books.js";
import BookCard from "./BookCard";
import { useDispatch, useSelector } from "react-redux";
import {
  updateBooks,
  toggleLoadingPage,
  updatePageNum,
} from "../store/index.js";

function BooksContainer({ scrollHeroTop }) {
  const BooksContainer = useRef();
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.data);
  const subject = useSelector((state) => state.books.subject);
  const customSearch = useSelector((state) => state.books.customSearch);
  const loadingPage = useSelector((state) => state.loadingPage);
  const pageNum = useSelector((state) => state.pageNum);

  useEffect(async () => {
    dispatch(toggleLoadingPage());
    dispatch(updatePageNum(0));
    let res = await getBookBySubject("Horror", 0);
    dispatch(updateBooks({ subject: "Horror", data: res.items }));
    dispatch(toggleLoadingPage());
  }, []);

  useEffect(async () => {
    // scrollHeroTop();
    dispatch(toggleLoadingPage());
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
    dispatch(toggleLoadingPage());
  }, [pageNum]);

  function handlePageDown() {
    if (pageNum > 0 && !loadingPage) {
      dispatch(updatePageNum(pageNum - 20));
      scrollHeroTop();
    }
  }
  function handlePageUp() {
    if (!loadingPage) {
      dispatch(updatePageNum(pageNum + 20));
      scrollHeroTop();
    }
  }

  return (
    <div className="books-wrapper" ref={BooksContainer}>
      <h1>{subject && subject.toUpperCase()}</h1>
      <div className="books-container">
        {books?.length > 0 &&
          books.map((book, i) => {
            return <BookCard key={i} data={book} />;
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
