import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import styles from "./Layout.module.scss";
import { LayoutProps } from "./Layout.props";
import Logo from "../images/logo.svg";
import { PROJECTS } from "../config/projects";

export const Layout = ({ children, ...props }: LayoutProps) => {
  return (
    <div className={styles.layout} {...props}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} items={PROJECTS} Logo={Logo} />
      <div className={styles.body}>{children}</div>
    </div>
  );
};
