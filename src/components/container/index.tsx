import type { CSSProperties } from "react";
import "./styles.css";

interface Props {
  children?: React.ReactNode;
  flexDirection?: CSSProperties["flexDirection"];
  gap?: CSSProperties["gap"];
}
const Container: React.FC<Props> = ({ children, flexDirection = "row", gap = "25px" }) => {
  return (
    <div className="container-component" style={{ flexDirection, gap }}>
      {children}
    </div>
  );
};

export default Container;
