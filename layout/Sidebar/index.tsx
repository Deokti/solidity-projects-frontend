import styles from "./Sidebar.module.scss";

import cn from "classnames";
import { SidebarItemProps, SidebarProps } from "./Sidebar.props";
import Link from "next/link";
import React from "react";

export const Sidebar = (props: SidebarProps) => {
  const { className, Logo, items, activeId, ...p } = props;

  const isLogo = typeof Logo !== "undefined";

  return (
    <div className={cn(styles.sidebar, className)} {...p}>
      {isLogo && React.cloneElement(<Logo />, { className: styles.logo })}

      <ul className={styles.list}>
        {items &&
          items.map((item) => (
            <li className={styles.item} key={item._id}>
              <SidebarItem item={item} activeId={activeId} />
            </li>
          ))}
      </ul>
    </div>
  );
};

const SidebarItem = ({ activeId: active, item }: SidebarItemProps) => {
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
