import React from "react";
import "../styles/LoadingBookCard.css";
function LoadingBookCard() {
  return (
    <div className="loading-book">
      <div className="loading-book-left"></div>
      <div className="loading-book-right">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default LoadingBookCard;
