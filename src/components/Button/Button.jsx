import styles from "./Button.module.css";
import clsx from "clsx";

const Button = ({ children, variant = "primary", className }) => {
  return (
    <button className={clsx(styles.btn, styles[`btn--${variant}`], className)}>
      {children}
    </button>
  );
};

export default Button;
