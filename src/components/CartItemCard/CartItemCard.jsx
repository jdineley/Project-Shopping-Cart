import styles from "./CartItemCard.module.css";

export default function CartItemCard({ item, handleQtyChange }) {
  // console.log(product);
  return (
    <div className={styles.cartItemCard}>
      <img className={styles.img} src={item.image} alt="" />
      <div className={styles.cartItemCardRh}>
        <p>{item.title}</p>
        <div className={styles.cartItemCardPriceQty}>
          <div className={styles.plusTenContainer}>
            {parseInt(item.qty) < 10 ? (
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
                <option value="10">10+</option>
              </select>
            ) : (
              <>
                <input
                  className={styles.input}
                  min={0}
                  type="number"
                  value={item.qty}
                  onChange={(e) => handleQtyChange(e, item.id)}
                />
                <button
                  className={styles.deleteButton}
                  onClick={(e) => handleQtyChange(e, item.id, "del")}
                >
                  Delete
                </button>
              </>
            )}
          </div>
          <p className={styles.price}>
            <span className={styles.priceUnit}>£</span>
            {(item.price * item.qty).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
