import type { CSSProperties } from "react";
import "./styles.css";
interface Props {
  children?: React.ReactNode;
  title?: string;
  isRequired?: boolean;
  textTransform?: CSSProperties["textTransform"];
  color?: CSSProperties["color"];
  padding?: CSSProperties["padding"];
  className?: string;
  renderRight?: () => React.ReactNode;
}
const Label: React.FC<Props> = ({
  children,
  title = "",
  textTransform = "none",
  color = "#121f0a",
  className = "",
  padding = "20px",
  isRequired = false,
  renderRight = () => null,
}) => {
  return (
    <div
      className={`label-component ${className}`}
      style={{ textTransform, color, padding }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="custom-row justify-content-between align-items-center">
        {title && (
          <p>
            {title} {isRequired && <span style={{ color: "red" }}>*</span>}
          </p>
        )}
        {renderRight()}
      </div>
      {children}
    </div>
  );
};
export default Label;
