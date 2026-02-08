import styles from "./Button.module.css";
import clsx from "clsx";

const Button = ({ children, variant = "primary", ...props }) => {
  return (
    <button className={clsx(styles.btn, styles[`btn--${variant}`])} {...props}>
      {children}
    </button>
  );
};

export default Button;
