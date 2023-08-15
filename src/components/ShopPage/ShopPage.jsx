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
}) {
  // const [products, setProducts] = useState([]);
  // const [addedItems, setAddedItems] = useState(() => {
  //   return JSON.parse(localStorage.getItem("addedItems")) || [];
  // });
  // const [filter, setFilter] = useState("");
  // const displayProducts = !filter
  //   ? products
  //   : products.filter((product) => {
  //       return product.category === filter;
  //     });
  // console.log(products, addedItems);

  // useEffect(() => {
  //   localStorage.setItem("addedItems", JSON.stringify(addedItems));
  // }, [addedItems]);

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((products) => setProducts(products))
  //     .catch((err) => console.log(err));
  // }, []);

  // function handleAddItem(item) {
  //   console.log("clicked");
  //   let containsItem = false;
  //   for (let i = 0; i < addedItems.length; i++) {
  //     if (addedItems[i].id === item.id) {
  //       containsItem = true;
  //       break;
  //     }
  //   }
  //   console.log(containsItem);
  //   if (containsItem) {
  //     setAddedItems(
  //       addedItems.map((itm) => {
  //         if (itm.id === item.id && itm.qty < 9) {
  //           return { ...itm, qty: parseInt(itm.qty) + 1 };
  //         }
  //         return itm;
  //       })
  //     );
  //   } else {
  //     setAddedItems([...addedItems, { ...item, qty: 1 }]);
  //   }
  // }

  // function handleChangeFilter(event) {
  //   const { value } = event.target;
  //   console.log(value);
  //   setFilter(value);
  // }

  // function handleQtyChange(event, id, del) {
  //   console.log(del);
  //   if (del) {
  //     console.log("here");
  //     setAddedItems(
  //       addedItems.filter((item) => {
  //         if (item.id !== id) return item;
  //       })
  //     );
  //     return;
  //   }
  //   const { value } = event.target;
  //   console.log(value, id);
  //   if (value === "0") {
  //     setAddedItems(
  //       addedItems.filter((item) => {
  //         if (item.id !== id) return item;
  //       })
  //     );
  //     return;
  //   }
  //   setAddedItems(
  //     addedItems.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, qty: value };
  //       }
  //       return item;
  //     })
  //   );
  // }

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
        <ShopCart addedItems={addedItems} handleQtyChange={handleQtyChange} />
      </div>
    </>
  );
}
