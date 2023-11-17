import React, { useState, useEffect } from "react";
import axios from "axios";
import gsap from "gsap";
import ShopItem from "./Component/ShopItem";
import CartItem from "./Component/CartItem";
import Search from "./Component/SearchInput";

const App = () => {
  const [shopItems, setShopItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const decrement = (itemId) => {
    // Implement decrement logic
  };

  const increment = (itemId) => {
    // Implement increment logic
  };

  useEffect(() => {
    axios
      .get("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/shoes.json")
      .then((res) => {
        setShopItems(res.data.shoes);
      });
  }, []);

  return (
    <div className="wrapper">
      <div className="screen -left">
        <div className="app-bar"></div>
        <div className="title">Picked items</div>
        <div className="shop-items">
          {shopItems.map((item) => (
            <ShopItem key={item.id} item={item} addToCart={addToCart} />
          ))}
        </div>
      </div>

      <div className="screen -right">
        <div className="app-bar"></div>
        <div className="title">Your cart</div>
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="no-content"></div>
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
      <Search shopItems={shopItems} addToCart={addToCart} />
    </div>
  );
};

export default App;
