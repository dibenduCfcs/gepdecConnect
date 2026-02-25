import "./styles.css";
import { useEffect, useId, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

type InputBoxProps = {
  inputPlaceholder?: string;
  inputValue?: string;
  onInputChange?: (value: string) => void;
  renderLeft?: (isMobile: boolean) => ReactNode;
  renderRight?: (isMobile: boolean) => ReactNode;
  width?: CSSProperties["width"];
  maxWidth?: CSSProperties["maxWidth"];
};

const MOBILE_BREAKPOINT = 768;

const InputBox = ({
  inputPlaceholder = "Search projects...",
  inputValue,
  onInputChange,
  renderLeft,
  renderRight,
  width,
  maxWidth,
}: InputBoxProps) => {
  const [localValue, setLocalValue] = useState("");
  const inputId = useId();
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined"
      ? window.innerWidth <= MOBILE_BREAKPOINT
      : false,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (value: string) => {
    setLocalValue(value);
    onInputChange?.(value);
  };

  const controlStyle: CSSProperties = {
    width: width ?? "100%",
    maxWidth: maxWidth ?? "100%",
  };

  return (
    <div className="input-box-controls" style={controlStyle}>
      {renderLeft && (
        <div className="input-box-controls-left">{renderLeft(isMobile)}</div>
      )}
      <label className="input-box-input-wrap" htmlFor={inputId}>
        <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
        <input
          id={inputId}
          type="text"
          value={inputValue !== undefined ? inputValue : localValue}
          placeholder={inputPlaceholder}
          onChange={(event) => handleChange(event.target.value)}
        />
      </label>
      {renderRight && (
        <div className="input-box-controls-right">{renderRight(isMobile)}</div>
      )}
    </div>
  );
};

export default InputBox;
