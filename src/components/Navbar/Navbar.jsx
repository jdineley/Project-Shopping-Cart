import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <h1>Shopping app</h1>
      <Link to="shop-cart">Shop Cart</Link>
    </div>
  );
}
