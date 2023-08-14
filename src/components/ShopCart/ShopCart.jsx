import styles from "./ShopCart.module.css";
import CartItemCard from "../CartItemCard/CartItemCard";

export default function ShopCart({ addedItems, handleQtyChange }) {
  return (
    <div className={styles.shopCart}>
      <h1 className={styles.h1}>Shopping basket</h1>
      {addedItems.map((item) => {
        return (
          <div key={item.id}>
            <CartItemCard item={item} handleQtyChange={handleQtyChange} />
            <hr className={styles.hr} />
          </div>
        );
      })}
    </div>
  );
}
