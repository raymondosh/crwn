import React from "react";
import "./cart-item.styles.scss";

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => {
  return (
    <div>
      <div className="cart-item">
        <img src={imageUrl} alt="of the item" />
        <div className="item-details">
          <span className="name">{name}</span>
          <span className="price">
            {quantity} x ${price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
