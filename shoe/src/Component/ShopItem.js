const ShopItem = ({ item, addToCart }) => (
  <div className="item" key={item.id}>
    <div className="item-block">
      {/* ... (existing code for the shop item) */}
      <div className="bottom-area">
        <div className="price">${item.price}</div>
        <div
          className={`button addButton${item.id}`}
          onClick={() => addToCart(item)}
        >
          <p className="buttonText">
            {!item.inCart ? (
              "ADD TO CART"
            ) : (
              <span className="cover">
                <span className="check"></span>
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  </div>
);
export default ShopItem