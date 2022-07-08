export interface CardProps {
  borderRadius?: string | number;
  maxWidth?: number | string;
  minHeight?: number | string;
  padding?: string;
  children: JSX.Element;
  className?: string;
  style?: React.CSSProperties | undefined;
}
