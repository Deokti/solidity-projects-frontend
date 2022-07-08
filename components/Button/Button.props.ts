import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "contained" | "outlined";
  primary?: boolean;
  secondary?: boolean;
  size?: "small" | "default";
  loading?: boolean;
}
