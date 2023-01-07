import React, { useRef, useState } from "react";
import "../styles/CategoryList.css";
import { useDispatch, useSelector } from "react-redux";
import { addToShowBooks } from "../store/index.js";
import { getBookBySubject } from "../services/subject";

function CategoryList({ category }) {
  const dispatch = useDispatch();
  const list = useRef();
  const showIcon = useRef();
  const nameContainer = useRef();
  const { name } = useSelector((state) => {
    return state.showBooks;
  });

  function showList() {
    if (list.current.style.maxHeight === "0px") {
      list.current.style.maxHeight = "3000px";
      showIcon.current.style.transform = "rotate(180deg)";
      nameContainer.current.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    } else {
      list.current.style.maxHeight = "0px";
      showIcon.current.style.transform = "rotate(0deg)";
      nameContainer.current.style.backgroundColor = "";
    }
  }

  async function handleGenreClick(genre) {
    if (genre === name) return;
    let res = await getBookBySubject(genre);
    const result = {
      books: res.items,
      name: genre,
    };
    dispatch(addToShowBooks(result));
  }
  return (
    <div className="category-list">
      <div
        ref={nameContainer}
        onClick={showList}
        className="category-list-name"
      >
        <p>{category.name}</p>
        <span
          ref={showIcon}
          className="material-symbols-outlined category-list-icon"
        >
          expand_less
        </span>
      </div>
      <ul className="category-list-all" ref={list} style={{ maxHeight: "0px" }}>
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
