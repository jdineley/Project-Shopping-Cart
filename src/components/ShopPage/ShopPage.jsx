import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import ShopCart from "../ShopCart/ShopCart";
import Items from "../Items/Items";

import styles from "./ShopPage.module.css";

export default function ShopPage() {
  const [products, setProducts] = useState([]);
  const [addedItems, setAddedItems] = useState([]);
  console.log(products, addedItems);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => setProducts(products))
      .catch((err) => console.log(err));
  }, []);

  function handleAddItem(item) {
    console.log("clicked");
    setAddedItems([...addedItems, { ...item, qty: 1 }]);
  }
  return (
    <>
      <Navbar title="Shopping Page" parent="Navbar" />
      <div className={styles.shopPage}>
        <Items products={products} handleAddItem={handleAddItem} />
        <ShopCart addedItems={addedItems} />
      </div>
    </>
  );
}
