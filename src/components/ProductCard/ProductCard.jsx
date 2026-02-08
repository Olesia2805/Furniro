import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  const { image, name, subtitle, price, oldPrice, discount, isNew } = product;
  return (
    <li className={styles.card}>
      <img
        className={styles.img}
        src={image}
        alt={name}
        width="285px"
        height="300px"
      />
      {discount && (
        <span className={`${styles.badge} ${styles.discount}`}>{discount}</span>
      )}
      {isNew && (
        <span className={`${styles.badge} ${styles.newItem}`}>New</span>
      )}
      <div className={styles.cardInfo}>
        <h5 className={styles.title}>{name}</h5>
        <p className={styles.text}>{subtitle}</p>
        <div className={styles.prices}>
          <p className={styles.actualPrice}>$ {price}</p>
          {oldPrice && <span className={styles.oldPrice}>$ {oldPrice}</span>}
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
