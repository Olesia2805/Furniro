import styles from "./FeaturesCard.module.css";

const FeaturesCard = ({ feature }) => {
  const { Icon, title, text } = feature;

  return (
    <li className={styles.card}>
      {Icon && <Icon className={styles.icon} />}
      <div className={styles.description}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.text}>{text}</p>
      </div>
    </li>
  );
};

export default FeaturesCard;
