import styles from "./Section.module.css";
import clsx from "clsx";

const Section = ({ children, variant }) => {
  return (
    <section className={clsx(styles.section, styles[`section--${variant}`])}>
      {children}
    </section>
  );
};

export default Section;
