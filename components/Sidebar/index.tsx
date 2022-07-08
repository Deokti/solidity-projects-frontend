import styles from "./Sidebar.module.scss";

import cn from "classnames";
import { SidebareItemProps, SidebarProps } from "./Sidebar.props";
import Link from "next/link";
import React from "react";
import { Project } from "../../config/projects";

export const Sidebar = (props: SidebarProps) => {
  const { className, Logo, items, ...p } = props;

  const isLogo = typeof Logo !== "undefined";

  return (
    <div className={cn(styles.sidebar, className)} {...p}>
      {/* <Logo className={styles.logo} /> */}
      {isLogo && React.cloneElement(<Logo />, { className: styles.logo })}

      <ul className={styles.list}>
        {items &&
          items.map((item) => (
            <li className={styles.item}>
              <SidebarItem item={item} active={"1"} />
            </li>
          ))}
      </ul>
    </div>
  );
};

const SidebarItem = ({ active, item }: SidebareItemProps) => {
  return (
    <Link href={item.href}>
      <div
        className={cn(styles.sidebarItem, {
          [styles.active]: item._id == active,
        })}
      >
        {React.cloneElement(<item.Icon />, {
          className: styles.sidebarItemBefore,
        })}
        <span>{item.name}</span>
      </div>
    </Link>
  );
};
