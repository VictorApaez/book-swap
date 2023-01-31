import { Carousel } from "./Carousel";
import React from "react";
export function CarouselContainer() {
  const one = [
    "https://books.google.com/books/content?id=XfFvDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "http://books.google.com/books/content?id=EjFbDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "http://books.google.com/books/content?id=oZhagX6UWOMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",

    "http://books.google.com/books/content?id=CMeVEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "http://books.google.com/books/content?id=afCxg5sogvAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "http://books.google.com/books/content?id=fj84EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "http://books.google.com/books/content?id=4wEACwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "http://books.google.com/books/content?id=OBwDg13MGkMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "http://books.google.com/books/content?id=IzbzwAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "http://books.google.com/books/content?id=nh2NEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "http://books.google.com/books/content?id=9c7UjwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  ];
  const two = [
    "http://books.google.com/books/content?id=aJhPEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "http://books.google.com/books/content?id=9vaLDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_apis",
    "http://books.google.com/books/content?id=N6leDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "http://books.google.com/books/content?id=YDzTCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "http://books.google.com/books/content?id=DDoEEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "http://books.google.com/books/content?id=dZ1TngEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "http://books.google.com/books/content?id=FZynjgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "http://books.google.com/books/content?id=NGJubhmwqfoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "http://books.google.com/books/content?id=fPyiEpxX2WgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "http://books.google.com/books/content?id=mTDuAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "http://books.google.com/books/content?id=PfmjWho_zOAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  ];
  const three = [
    "http://books.google.com/books/content?id=W0D2nQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "http://books.google.com/books/content?id=HYibDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "http://books.google.com/books/content?id=feWfzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "http://books.google.com/books/content?id=wmnuDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "http://books.google.com/books/content?id=3s8DEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "http://books.google.com/books/content?id=yl4dILkcqm4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "http://books.google.com/books/content?id=Re9ZwgL01jUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "http://books.google.com/books/content?id=n6CMEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "http://books.google.com/books/content?id=cxteDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "http://books.google.com/books/content?id=ictWAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "http://books.google.com/books/content?id=KpGNejM3nkEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  ];
  return (
    <>
      <Carousel images={one} direction={"backward-animation"} />
      <Carousel images={two} direction={"forward-animation"} />
      <Carousel images={three} direction={"backward-animation"} />
    </>
  );
}
