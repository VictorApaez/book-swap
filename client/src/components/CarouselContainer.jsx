import { Carousel } from "./Carousel";
import React from "react";
export function CarouselContainer({ images }) {
  return (
    <>
      <Carousel images={images} direction={"backward-animation"} />
      <Carousel images={images} direction={"forward-animation"} />
      <Carousel images={images} direction={"backward-animation"} />
    </>
  );
}
