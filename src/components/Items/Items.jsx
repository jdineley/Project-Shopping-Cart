import { useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import styles from "./Items.module.css";

export default function Items({ products, handleAddItem }) {
  return (
    <div className={styles.items}>
      {products.map((prod) => (
        <ItemCard key={prod.id} product={prod} handleAddItem={handleAddItem} />
      ))}
    </div>
  );
}
