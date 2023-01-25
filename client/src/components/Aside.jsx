import { SearchBar } from "./SearchBar";
import React, { useEffect, useRef } from "react";
import "../styles/Aside.css";
import CategoryList from "./CategoryList";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../store";

function Aside({
  toggleAside,
  setToggleAside,
  loadingPage,
  setLoadingPage,
  setPageNum,
}) {
  // will store this in DB later
  const categories = {
    fictionLiterature: {
      name: "Fiction & literature",
      genres: [
        "Myth",
        "General Fiction",
        "Graphic Novels & Comics",
        "Historical Fiction",
        "Horror",
        "Literary Fiction",
        "Literature",
        "Manga",
        "Mystery & Crime",
        "Poetry",
        "Romance",
        "Science Fiction & Fantasy",
        "Thrillers",
        "Westerns",
      ],
    },
    nonFiction: {
      name: "Nonfiction",
      genres: [
        "Games",
        "African-American Studies",
        "Antiques",
        "Art, Architecture & Photography",
        "Astrology & Tarot",
        "Bibles & Christianity",
        "Biography",
        "Business Books",
        "Computers",
        "Cookbooks, Food & Wine",
        "Crafts & Hobbies",
        "Politics",
        "Diet, Health & Fitness",
        "Education",
        "Engineering",
        "Foreign Languages",
        "History",
        "Home & Garden",
        "Humor",
        "Law",
        "LGBTQIA",
        "Medicine & Nursing Books",
        "Music",
        "Nature",
        "New Age & Alternative Beliefs",
        "Parenting & Family",
        "Performing Arts",
        "Pets",
        "Philosophy",
        "Psychology",
        "Reference",
        "Religion",
        "Role-Playing & Fantasy Games",
        "Science & Technology",
        "Self-Help & Relationships",
        "Social Sciences",
        "Sociology",
        "Sports",
        "Study Aids & Test Prep",
        "Transportation",
        "Travel",
        "True Crime",
        "Weddings",
        "Women's Studies",
      ],
    },
  };
  const asideContainer = useRef();
  const dispatch = useDispatch();
  const theme = useSelector((state) => {
    return state.theme;
  });

  const switchIcon = useRef();
  function handleThemeClick() {
    dispatch(changeTheme(!theme));
  }

  useEffect(() => {
    if (toggleAside) {
      asideContainer.current.style.left = "0";
    } else {
      asideContainer.current.style.left = "-100%";
    }
  }, [toggleAside]);
  return (
    <div className="aside" ref={asideContainer}>
      <div className="aside-content">
        <SearchBar
          setLoadingPage={setLoadingPage}
          setPageNum={setPageNum}
          setToggleAside={setToggleAside}
          toggleAside={toggleAside}
        />
        <div
          className="theme-switch-wrapper"
          ref={switchIcon}
          onClick={handleThemeClick}
        >
          <em>Dark Mode Enabled</em>
        </div>
        <div className="categories-container">
          <CategoryList
            setToggleAside={setToggleAside}
            category={categories.fictionLiterature}
            toggleAside={toggleAside}
            loadingPage={loadingPage}
            setLoadingPage={setLoadingPage}
            setPageNum={setPageNum}
          />
          <CategoryList
            setToggleAside={setToggleAside}
            category={categories.nonFiction}
            toggleAside={toggleAside}
            loadingPage={loadingPage}
            setLoadingPage={setLoadingPage}
            setPageNum={setPageNum}
          />
        </div>
      </div>
    </div>
  );
}

export default Aside;
