import React, { useRef, useState } from "react";
import "../styles/CategoryList.css";
import { useDispatch } from "react-redux";
import { addToShowBooks } from "../store/index.js";
import { getBookBySubject } from "../services/subject";

function CategoryList({ category }) {
  const dispatch = useDispatch();
  const list = useRef();

  function showList() {
    if (list.current.style.maxHeight === "0px") {
      list.current.style.maxHeight = "3000px";
    } else {
      list.current.style.maxHeight = "0px";
    }
  }

  async function handleGenreClick(genre) {
    let res = await getBookBySubject(genre);
    const result = {
      books: res.items,
      name: genre,
    };
    dispatch(addToShowBooks(result));
  }
  return (
    <div className="category-list">
      <div className="category-list-name">
        <p onClick={showList}>{category.name}</p>
        <span className="material-symbols-outlined">expand_less</span>
      </div>
      <ul className="category-list-all" ref={list}>
        {category.genres.map((genre, i) => {
          return (
            <li key={i} onClick={() => handleGenreClick(genre)}>
              {genre}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CategoryList;
