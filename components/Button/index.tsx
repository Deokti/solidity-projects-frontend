import { ButtonProps } from "./Button.props";
import styles from "./Button.module.scss";
import cn from "classnames";

export const Button = (props: ButtonProps) => {
  const {
    disabled,
    children = "Button",
    variant = "contained",
    primary = true,
    loading = false,
    size = "default",
    secondary = false,
  } = props;

  return (
    <button
      className={cn(styles.button, {
        [styles.contained]: variant === "contained",
        [styles.outlined]: variant === "outlined",
        [styles.default]: size === "default",
        [styles.small]: size === "small",
        [styles.primary]: primary,
        [styles.secondary]: secondary,
      })}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
