import styles from "./ItemCard.module.css";

export default function ItemCard({ product, handleAddItem }) {
  return (
    <div className={styles.ItemCard}>
      <div>
        <img className={styles.img} src={product.image} alt="" />
        <p>{product.title}</p>
        <p className={styles.price}>
          <span className={styles.priceUnit}>£</span>
          {product.price}
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.button}
          onClick={() => handleAddItem(product)}
        >
          Add to Basket
        </button>
      </div>
    </div>
  );
}
