import React from "react";
export function Carousel({ images, direction }) {
  return (
    <div className="carousel-container ">
      <div alt="carousel" className={`carousel-image-container ${direction}`}>
        {images.map((image, i) => {
          return (
            <img
              key={i}
              className="carousel-image"
              src={`${image}`}
              alt="image of book"
            />
          );
        })}
      </div>

      <div alt="carousel" className={`carousel-image-container ${direction}`}>
        {images.map((image, i) => {
          return (
            <img
              key={i}
              className="carousel-image"
              src={`${image}`}
              alt="image of book"
            />
          );
        })}
      </div>
    </div>
  );
}
