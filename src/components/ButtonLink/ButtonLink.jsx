import { Link } from "react-router-dom";
import clsx from "clsx";
import styles from "./ButtonLink.module.css";

const ButtonLink = ({ to, children, variant, className, ...props }) => {
  return (
    <Link
      to={to}
      className={clsx(styles.btn, styles[`btn--${variant}`], className)}
      {...props}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
