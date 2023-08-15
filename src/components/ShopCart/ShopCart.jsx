import styles from "./ShopCart.module.css";
import CartItemCard from "../CartItemCard/CartItemCard";

export default function ShopCart({
  addedItems,
  handleQtyChange,
  handleClearBasket,
}) {
  return (
    <div className={styles.shopCart}>
      <h1 className={styles.h1}>Shopping basket</h1>
      {addedItems.length ? (
        addedItems.map((item) => {
          return (
            <div key={item.id}>
              <CartItemCard item={item} handleQtyChange={handleQtyChange} />
              <hr className={styles.hr} />
            </div>
          );
        })
      ) : (
        <h3>No items in your shopping basket</h3>
      )}

      {addedItems.length > 0 && (
        <div className={styles.totalCollector}>
          <p>
            Total: £
            {addedItems
              .reduce((acc, cur) => {
                return acc + parseInt(cur.qty) * cur.price;
              }, 0)
              .toFixed(2)}
          </p>
          <button onClick={handleClearBasket} className={styles.clearButton}>
            Clear Shopping Basket
          </button>
        </div>
      )}
    </div>
  );
}
