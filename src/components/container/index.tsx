import type { CSSProperties } from "react";
import "./styles.css";
import { useIsMobileWindow } from "../../hook";

interface Props {
  children?: React.ReactNode;
  flexDirection?: CSSProperties["flexDirection"];
  gap?: CSSProperties["gap"];
  marginBottom?: CSSProperties["marginBottom"];
}
const Container: React.FC<Props> = ({
  children,
  flexDirection = "row",
  gap = "25px",
  ...props
}) => {
  const isMobile = useIsMobileWindow();
  const { marginBottom = isMobile ? "16px" : "40px" } = props;
  return (
    <div className="container-component" style={{ flexDirection, gap, marginBottom }}>
      {children}
    </div>
  );
};

export default Container;
