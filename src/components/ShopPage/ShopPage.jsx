import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import ShopCart from "../ShopCart/ShopCart";
import Items from "../Items/Items";

import styles from "./ShopPage.module.css";

export default function ShopPage({
  displayProducts,
  addedItems,
  handleChangeFilter,
  handleAddItem,
  handleQtyChange,
  handleClearBasket,
}) {
  return (
    <>
      <div className={styles.filter}>
        <label htmlFor="filter">Filter Category: </label>
        <select name="filter" id="filter" onChange={handleChangeFilter}>
          <option value="">All Categories</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewlery</option>
        </select>
      </div>
      <div className={styles.shopPage}>
        <Items products={displayProducts} handleAddItem={handleAddItem} />
        <ShopCart
          addedItems={addedItems}
          handleQtyChange={handleQtyChange}
          handleClearBasket={handleClearBasket}
        />
      </div>
    </>
  );
}
