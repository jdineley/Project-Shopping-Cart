import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar({ parent, title, addedItems }) {
  return (
    <div className={styles.navbar}>
      {parent === "App" ? (
        <Link to="shop-page">Shop Page</Link>
      ) : (
        <Link to="/">home</Link>
      )}
      <h1>{title}</h1>
      <div className={styles.summaryContainer}>
        <div className={styles.summaryItem}>
          <p>Qty</p>
          <p>
            {addedItems.reduce((acc, cur) => {
              return acc + cur.qty;
            }, 0)}
          </p>
        </div>
        <div className={styles.summaryItem}>
          <p>Total</p>
          <p>
            {addedItems.reduce((acc, cur) => {
              return acc + cur.qty * cur.price;
            }, 0)}
          </p>
        </div>
      </div>
    </div>
  );
}
