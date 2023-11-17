import React, { useState } from "react";

const PriceButton = ({ price }) => {
  const [showPrice, setShowPrice] = useState(false);

  const handleClick = () => {
    // Toggle between "Price" and actual price
    setShowPrice((prevShowPrice) => !prevShowPrice);
  };

  return (
    <button className="price-btn" onClick={handleClick}>
      <span className={showPrice ? "flipped" : ""}>
        {showPrice ? "Price" : `$${price}`}
      </span>
    </button>
  );
};

const CartItem = ({ item, decrement, increment }) => (
  <div className="cart-item" key={item.id}>
    <div className="left">
      <div className="cart-image">
        <div className="image-wrapper">
          <img className="image" src={item.image} alt={item.name} />
        </div>
      </div>
    </div>
    <div className="right">
      <div className="name">{item.name}</div>
      <div className="price">
        {/* Integrate the price button here */}
        <PriceButton price={item.price} />
      </div>
      <div className="count">
        {/* ... (existing code for the item count) */}
      </div>
    </div>
  </div>
);

export default CartItem;
