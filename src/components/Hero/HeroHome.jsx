import styles from "./HeroHome.module.css";
import Section from "../Section/Section";
import Container from "../Container/Container";
import ButtonLink from "../ButtonLink/ButtonLink";
import { ROUTER } from "../../app/routes";

const HeroHome = () => (
  <Section variant="hero-home">
    <img
      className={styles.bg}
      src="/img/home-hero-background.webp"
      alt="furniture"
    />
    <Container variant="card">
      <div className={styles.card}>
        <span className={styles.hashtag}>New Arrival</span>
        <h1 className={styles.title}>Discover Our New Collection</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <ButtonLink variant="accent" to={ROUTER.SHOP}>
          BUY NOW
        </ButtonLink>
      </div>
    </Container>
  </Section>
);

export default HeroHome;
