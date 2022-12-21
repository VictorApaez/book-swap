import React from "react";
import "../styles/ShoppingCartProduct.css";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../store";

function ShoppingCartProduct({ id, info, price, rating, image }) {
  const dispatch = useDispatch();

  const removeFromBasketBtn = () => {
    dispatch(removeFromBasket({ id: id }));
  };

  return (
    <div className="shoppingCartProduct">
      <div className="shoppingCartProduct__image__container">
        <img className="shoppingCartProduct__image" alt="" src={image}></img>
      </div>

      <div className="shoppingCartProduct__info">
        <p className="shoppingCartProduct__title">{info}</p>

        <div className="shoppingCartProduct__rating">
          {Array(rating)
            .fill(null)
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <p className="shoppingCartProduct__price">
          $<strong>{price}</strong>
        </p>
        <button
          onClick={removeFromBasketBtn}
          className="shoppingCartProduct__button"
        >
          Remove item
        </button>
      </div>
    </div>
  );
}

export default ShoppingCartProduct;
