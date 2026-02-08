import styles from "./HeroPage.module.css";
import Section from "../Section/Section";
import Container from "../Container/Container";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const HeroPage = ({ title }) => (
  <Section variant="hero-page">
    <img
      className={styles.bg}
      src="/hero-background.webp"
      alt="table with flowers"
    />
    <Container variant="hero-page">
      <img
        className={styles.logo}
        src="/favicon.svg"
        alt="logo"
        width="50px"
        height="32px"
      />
      <h2 className={styles.title}>{title}</h2>
      <Breadcrumbs title={title} />
    </Container>
  </Section>
);

export default HeroPage;
