import "./styles.css";
import { useId } from "react";
import type { ChangeEventHandler, CSSProperties, ReactNode } from "react";
import { useIsMobileWindow } from "../../hook";

type InputBoxProps = {
  inputPlaceholder?: string;
  inputValue?: string;
  type?: React.HTMLInputTypeAttribute;
  name?: string;
  onInputChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  renderLeft?: (isMobile: boolean) => ReactNode;
  renderRight?: (isMobile: boolean) => ReactNode;
  width?: CSSProperties["width"];
  maxWidth?: CSSProperties["maxWidth"];
  icon?: string;
  className?: string;
  multiline?: boolean;
  rows?: number;
};

const InputBox = ({
  inputPlaceholder = "",
  inputValue,
  onInputChange,
  renderLeft,
  renderRight,
  width,
  maxWidth,
  type = "search",
  name = "email",
  className = "",
  icon,
  multiline = false,
  rows = 2,
}: InputBoxProps) => {
  const inputId = useId();
  const isMobile = useIsMobileWindow();

  const controlStyle: CSSProperties = {
    width: width ?? "100%",
    maxWidth: maxWidth ?? "100%",
  };

  return (
    <div className={`input-box-controls ${className}`} style={controlStyle}>
      {renderLeft && <div className="input-box-controls-left">{renderLeft(isMobile)}</div>}
      <label
        className={`input-box-input-wrap ${multiline ? "input-box-input-wrap-multiline" : ""}`}
        htmlFor={inputId}
      >
        {!multiline && type === "search" && (
          <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
        )}
        {icon && <img src={icon} alt="icon" />}
        {multiline ? (
          <textarea
            id={inputId}
            name={name}
            value={inputValue}
            placeholder={inputPlaceholder}
            onChange={onInputChange}
            rows={rows}
          />
        ) : (
          <input
            id={inputId}
            type={type}
            name={name}
            value={inputValue}
            placeholder={inputPlaceholder}
            onChange={onInputChange}
          />
        )}
      </label>
      {renderRight && <div className="input-box-controls-right">{renderRight(isMobile)}</div>}
    </div>
  );
};

export default InputBox;
