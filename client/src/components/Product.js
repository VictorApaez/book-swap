import React from "react";
import "../styles/Product.css";
import { addToBasket } from "../store";
import { useDispatch } from "react-redux";

function Product({ id, info, price, rating, image }) {
  const dispatch = useDispatch();
  const addToBasketButton = () => {
    dispatch(
      addToBasket({
        id,
        info,
        price,
        rating,
        image,
      })
    );
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
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img className="product__image" src={image} alt=""></img>
      <button onClick={addToBasketButton} className="product__button">
        Add to cart
      </button>
    </div>
  );
}

export default Product;
