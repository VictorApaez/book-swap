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
      <img className="shoppingCartProduct__image" alt="" src={image}></img>
      <div className="shoppingCartProduct__info">
        <p className="shoppingCartProduct__title">{info}</p>

        <div className="shoppingCartProduct__rating">
          {Array(rating)
            .fill(null)
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <button
          onClick={removeFromBasketBtn}
          className="shoppingCartProduct__button"
        >
          Remove item
        </button>
      </div>
      <p className="shoppingCartProduct__price">
        $<strong>{price}</strong>
      </p>
    </div>
  );
}

export default ShoppingCartProduct;
