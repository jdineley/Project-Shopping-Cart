import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar({ parent, title }) {
  return (
    <div className={styles.navbar}>
      {parent === "App" ? (
        <Link to="shop-page">Shop Page</Link>
      ) : (
        <Link to="/">home</Link>
      )}
      <h1>{title}</h1>
      <p>Number of items in cart</p>
    </div>
  );
}
