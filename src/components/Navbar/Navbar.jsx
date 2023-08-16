import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar({ parent, title, addedItems }) {
  return (
    <div className={styles.navbar}>
      {title === "Home Page" ? (
        <Link to="shop-page">Go shop</Link>
      ) : (
        <Link to="/">Go home</Link>
      )}
      <h1>{title}</h1>
      <div className={styles.summaryContainer}>
        <div className={styles.summaryItem}>
          <p>Qty</p>
          <p>
            {addedItems.reduce((acc, cur) => {
              return acc + parseInt(cur.qty);
            }, 0)}
          </p>
        </div>
        <div className={styles.summaryItem}>
          <p>Total</p>
          <p>
            £
            {addedItems
              .reduce((acc, cur) => {
                return acc + parseInt(cur.qty) * cur.price;
              }, 0)
              .toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
