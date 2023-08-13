import styles from "./CartItemCard.module.css";

export default function CartItemCard({ item }) {
  // console.log(product);
  return (
    <div className={styles.cartItemCard}>
      <img className={styles.img} src={item.image} alt="" />
      <div>
        <p>{item.title}</p>
        <p className={styles.price}>
          <span className={styles.priceUnit}>£</span>
          {item.price}
        </p>
        <div className={styles.buttonContainer}>
          <button className={styles.button}></button>
        </div>
      </div>
    </div>
  );
}
