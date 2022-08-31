import React from "react";
import { useContext } from "react";
import "../styles/Product.css";
import { StateContext } from "../StateProvider";

function Product({ id, info, price, rating, image }) {
  const [state, dispatch] = useContext(StateContext);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        info: info,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__description">{info}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {/* Creating an empty array with the length of "rating" */}
          {Array(rating)
            .fill(null)
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img className="product__image" src={image} alt=""></img>
      <button onClick={addToBasket} className="product__button">
        Add to cart
      </button>
    </div>
  );
}

export default Product;
