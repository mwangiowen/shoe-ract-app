import React, { useState, useEffect } from "react";
import axios from "axios";
import gsap from "gsap";
import ShopItem from "./Component/ShopItem";
import CartItem from "./Component/CartItem";
import Search from "./Component/SearchInput";

const App = () => {
  const [shopItems, setShopItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/shoes.json")
      .then((res) => {
        setShopItems(res.data.shoes);
      });
  }, []);

  // ... (existing code for addToCart, decrement, increment)

  return (
    <div className="wrapper">
      {/* Left Screen */}
      <div className="screen -left">
        <div className="app-bar">
          {/* ... (existing code for the app bar) */}
        </div>
        <div className="title">Picked items</div>
        <div className="shop-items">
          {shopItems.map((item) => (
            <ShopItem key={item.id} item={item} addToCart={addToCart} />
          ))}
        </div>
      </div>

      {/* Right Screen */}
      <div className="screen -right">
        <div className="app-bar">
          {/* ... (existing code for the app bar) */}
        </div>
        <div className="title">Your cart</div>
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="no-content">
              {/* ... (existing code for the empty cart) */}
            </div>
          ) : (
            <div className="cart-items">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  decrement={decrement}
                  increment={increment}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
