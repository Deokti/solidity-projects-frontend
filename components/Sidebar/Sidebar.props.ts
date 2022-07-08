import { FunctionComponent } from "react";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Project } from "../../config/projects";

export interface SidebarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  Logo?: FunctionComponent | undefined;
  items: Project[];
}

export interface SidebareItemProps {
  active?: string;
  item: Project;
}
