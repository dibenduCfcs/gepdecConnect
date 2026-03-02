import type { CSSProperties } from "react";
import "./styles.css";

interface Props {
  children?: React.ReactNode;
  flexDirection?: CSSProperties["flexDirection"];
}
const Container: React.FC<Props> = ({ children, flexDirection = "row" }) => {
  return (
    <div className="container-component" style={{ flexDirection }}>
      {children}
    </div>
  );
};

export default Container;
