import styles from "./Logo.module.css";
import ButtonLink from "../ButtonLink/ButtonLink";
import { ROUTER } from "../../app/routes";

const Logo = () => (
  <ButtonLink to={ROUTER.HOME} className={styles.logo}>
    <img src="/favicon.svg" alt="Furniro Logo" className={styles.image} />
    <span className={styles.text}>Furniro</span>
  </ButtonLink>
);
export default Logo;
