import React, { useEffect, useState } from "react";
import { getBookBySubject } from "../services/subject";
import BookCard from "./BookCard";
import "../styles/BooksContainer.css";

function BooksContainer({ subject }) {
  const [books, setBooks] = useState();

  useEffect(async () => {
    const res = await getBookBySubject(subject);
    console.log(res.items);
    setBooks(res.items);
  }, []);

  return (
    <div className="books-wrapper">
      <h1>{subject.toUpperCase()}</h1>
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
