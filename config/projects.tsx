import { FunctionComponent } from "react";
import Bank from "../images/bank.svg";

export interface Project {
  _id: string | number;
  name: string;
  href: string;
  Icon: FunctionComponent;
}

export const PROJECTS = [
  { _id: 0, name: "Project 1 - Bank", href: "/bank", Icon: Bank },
  { _id: 1, name: "Project 2 - Test", href: "/", Icon: Bank },
];
