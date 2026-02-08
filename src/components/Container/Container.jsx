import styles from "./Container.module.css";
import clsx from "clsx";

const Container = ({ children, variant = "default" }) => {
  return (
    <div className={clsx(styles.container, styles[`container--${variant}`])}>
      {children}
    </div>
  );
};

export default Container;
