import React, { useState } from "react";
import "../styles/BookCard.css";
function BookCard({ data }) {
  const thumbnail =
    data?.volumeInfo?.imageLinks?.thumbnail ||
    "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg";
  return (
    <a href={data.volumeInfo.infoLink} className="book-card" target="_blank">
      <img src={thumbnail} />
      <div className="book-card-info">
        <h4>{data?.volumeInfo?.title}</h4>
        <div className="book-card-authors">
          {data?.volumeInfo?.authors?.map((author, i) => {
            return <p key={i}>{author}</p>;
          })}
        </div>

        <button>More info</button>
      </div>
    </a>
  );
}

export default BookCard;
