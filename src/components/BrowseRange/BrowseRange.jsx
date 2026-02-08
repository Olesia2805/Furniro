import Section from "../Section/Section";
import Container from "../Container/Container";
import styles from "./BrowseRange.module.css";

const BrowseRange = () => (
  <Section>
    <Container>
      <div className={styles.header}>
        <h3>Browse The Range</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <img
            className={styles.img}
            src="/src/assets/img/dining.webp"
            alt="Dining"
            width="380px"
            height="480px"
          />
          <p className={styles.text}>Dining</p>
        </li>
        <li className={styles.item}>
          <img
            className={styles.img}
            src="/src/assets/img/living.webp"
            alt="Living"
            width="380px"
            height="480px"
          />
          <p className={styles.text}>Living</p>
        </li>
        <li className={styles.item}>
          <img
            className={styles.img}
            src="/src/assets/img/bedroom.webp"
            alt="Bedroom"
            width="380px"
            height="480px"
          />
          <p className={styles.text}>Bedroom</p>
        </li>
      </ul>
    </Container>
  </Section>
);

export default BrowseRange;
