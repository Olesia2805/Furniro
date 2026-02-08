import { IoIosArrowForward } from "react-icons/io";
import ButtonLink from "../ButtonLink/ButtonLink";
import styles from "./Breadcrumbs.module.css";
import { ROUTER } from "../../app/routes";

const Breadcrumbs = ({ title }) => (
  <nav className={styles.links}>
    <ButtonLink to={ROUTER.HOME}>Home</ButtonLink>
    <IoIosArrowForward />
    {title}
  </nav>
);

export default Breadcrumbs;
