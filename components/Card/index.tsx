import styles from "./Card.module.scss";
import { CardProps } from "./Card.props";
import cn from "classnames";

export const Card = (props: CardProps) => {
  const {
    children,
    style,
    className = "",
    borderRadius = 7,
    maxWidth = "100%",
    minHeight = "auto",
    padding = "30px 40px",
  } = props;

  return (
    <div
      className={cn(styles.card, className)}
      style={{ ...style, borderRadius, maxWidth, minHeight, padding }}
    >
      {children}
    </div>
  );
};
