import React, { useEffect } from "react";
import { getBookBySubject } from "../services/subject";
import BookCard from "./BookCard";
import "../styles/BooksContainer.css";
import { useDispatch, useSelector } from "react-redux";
import { addToShowBooks } from "../store/index.js";

function BooksContainer({ subject }) {
  const dispatch = useDispatch();
  const { books, name } = useSelector((state) => {
    console.log(state.showBooks);
    return state.showBooks;
  });

  useEffect(async () => {
    const res = await getBookBySubject(subject);
    const result = {
      books: res.items,
      name: subject,
    };
    dispatch(addToShowBooks(result));
  }, []);

  return (
    <div className="books-wrapper">
      <h1>{name && name.toUpperCase()}</h1>
      <div className="books-container">
        {books &&
          books.map((book, i) => {
            return <BookCard key={i} data={book} />;
          })}
      </div>
    </div>
  );
}

export default BooksContainer;
