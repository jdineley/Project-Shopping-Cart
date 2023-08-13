import styles from "./ShopCart.module.css";
import CartItemCard from "../CartItemCard/CartItemCard";

export default function ShopCart({ addedItems }) {
  return (
    <div className={styles.shopCart}>
      <h1 className={styles.h1}>Shopping basket</h1>
      {addedItems.map((item) => {
        return (
          <div key={item.id}>
            <CartItemCard item={item} />
            <hr className={styles.hr} />
          </div>
        );
      })}
    </div>
  );
}
