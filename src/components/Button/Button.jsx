import clsx from "clsx";

const Button = ({ children, variant = "primary", ...props }) => {
  return (
    <button className={clsx("btn", `btn--${variant}`)} {...props}>
      {children}
    </button>
  );
};

export default Button;
