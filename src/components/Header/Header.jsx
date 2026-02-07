import styles from "./Header.module.css";
import Container from "../Container/Container";
import Button from "../Button/Button";
import ButtonLink from "../ButtonLink/ButtonLink";
import Logo from "../Logo/Logo";
import { LuArrowRightLeft } from "react-icons/lu";
import {
  IoSearchOutline,
  IoHeartOutline,
  IoCartOutline,
} from "react-icons/io5";
import { ROUTER } from "../../app/routes";

const Header = () => (
  <header className={styles.header}>
    <Container>
      <div className={styles.headerInner}>
        <Logo />

        <nav className={styles.nav}>
          <ButtonLink to={ROUTER.HOME}>Home</ButtonLink>
          <ButtonLink to={ROUTER.SHOP}>Shop</ButtonLink>
          <ButtonLink to={ROUTER.BLOG}>About</ButtonLink>
          <ButtonLink to={ROUTER.CONTACT}>Contact</ButtonLink>
        </nav>

        <div className={styles.icons}>
          <ButtonLink to={ROUTER.COMPARISION}>
            <LuArrowRightLeft />
          </ButtonLink>
          <Button>
            <IoSearchOutline />
          </Button>
          <ButtonLink to={ROUTER.FAVOURITE}>
            <IoHeartOutline />
          </ButtonLink>
          <ButtonLink to={ROUTER.CART}>
            <IoCartOutline />
          </ButtonLink>
        </div>
      </div>
    </Container>
  </header>
);

export default Header;
