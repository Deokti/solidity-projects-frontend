import styles from "./Header.module.scss";

import cn from "classnames";
import { HeaderProps } from "./Header.props";

export const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <div className={cn(styles.header, className)} {...props}>
      <h1 className={cn(styles.title)}>Project Name</h1>
    </div>
  );
};
