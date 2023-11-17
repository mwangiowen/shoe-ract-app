const CartItem = ({ item, decrement, increment }) => (
  <div className="cart-item" key={item.id}>
    <div className="left">
      <div className="cart-image">
        {/* ... (existing code for the cart item image) */}
      </div>
    </div>
    <div className="right">
      <div className="name">{item.name}</div>
      <div className="price">${item.price}</div>
      <div className="count">
        {/* ... (existing code for the item count) */}
      </div>
    </div>
  </div>
);
export default CartItem