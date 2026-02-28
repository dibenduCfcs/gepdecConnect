import type { CSSProperties } from "react";
import "./styles.css";
interface Props {
  children?: React.ReactNode;
  title?: string;
  textTransform?: CSSProperties["textTransform"];
  color?: CSSProperties["color"];
}
const Label: React.FC<Props> = ({
  children,
  title = "",
  textTransform = "none",
  color = "#121f0a",
}) => {
  return (
    <div className="label-component" style={{ textTransform, color }}>
      {title && <p>{title}</p>}
      {children}
    </div>
  );
};
export default Label;
