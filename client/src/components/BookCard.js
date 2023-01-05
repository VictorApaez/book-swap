import React from "react";
import "../styles/BookCard.css";
function BookCard({ data }) {
  return (
    <div className="book-card">
      <img src={data.volumeInfo.imageLinks.thumbnail} />
      <div className="book-card-info">
        <h4>{data.volumeInfo.title}</h4>
        <p>{data.volumeInfo.authors[0]}</p>
        <button>More info</button>
      </div>
    </div>
  );
}

export default BookCard;
