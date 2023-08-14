import styles from "./CartItemCard.module.css";

export default function CartItemCard({ item, handleQtyChange }) {
  // console.log(product);
  return (
    <div className={styles.cartItemCard}>
      <img className={styles.img} src={item.image} alt="" />
      <div className={styles.cartItemCardRh}>
        <p>{item.title}</p>
        <div className={styles.cartItemCardPriceQty}>
          <select
            value={item.qty}
            className={styles.qtySelect}
            name="qty"
            id="qty"
            onChange={(e) => handleQtyChange(e, item.id)}
          >
            <option value="0">0 (delete)</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <p className={styles.price}>
            <span className={styles.priceUnit}>£</span>
            {item.price}
          </p>
        </div>
      </div>
    </div>
  );
}

// <div className={styles.buttonContainer}>
//   <button className={styles.button}></button>
// </div>
