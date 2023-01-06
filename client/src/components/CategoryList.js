import React from "react";

function CategoryList({ category }) {
  return (
    <div>
      <p>{category.name}</p>
      <ul>
        {category.genres.map((genre, i) => {
          return <li>{genre}</li>;
        })}
      </ul>
    </div>
  );
}

export default CategoryList;
