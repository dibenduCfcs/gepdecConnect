import "./styles.css";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

type DropdownOption = {
  id: number;
  value: string;
};

type DropdownBoxProps = {
  title?: string;
  options: DropdownOption[];
  value?: DropdownOption;
  defaultValue?: DropdownOption;
  placeholder?: string;
  onChange?: (value: DropdownOption) => void;
  renderLeft?: (isMobile: boolean) => ReactNode;
  renderRight?: (isMobile: boolean) => ReactNode;
  width?: CSSProperties["width"];
  maxWidth?: CSSProperties["maxWidth"];
};

const MOBILE_BREAKPOINT = 768;

const DropdownBox = ({
  title = "",
  options,
  value,
  defaultValue,
  placeholder = "Select option",
  onChange,
  renderLeft,
  renderRight,
  width,
  maxWidth,
}: DropdownBoxProps) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const [localValue, setLocalValue] = useState<DropdownOption | undefined>(defaultValue);

  const [isOpen, setIsOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= MOBILE_BREAKPOINT : false,
  );

  // Detect mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close dropdown on outside click / escape
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const controlStyle: CSSProperties = {
    width: width ?? "100%",
    maxWidth: maxWidth ?? "100%",
  };

  // Selected value (controlled or uncontrolled)
  const selectedOption = value ?? localValue;

  const selectedLabel = selectedOption?.value ?? placeholder;

  const hasOptions = options.length > 0;

  const handleSelect = (option: DropdownOption) => {
    if (value === undefined) {
      setLocalValue(option);
    }

    setIsOpen(false);
    onChange?.(option);
  };

  return (
    <div className="dropdown-box">
      {title && <div className="dropdown-box-title">{title}</div>}

      <div className="dropdown-box-controls">
        {renderLeft && <div className="dropdown-box-controls-left">{renderLeft(isMobile)}</div>}

        <div className="dropdown-box-select-wrap" ref={dropdownRef} style={controlStyle}>
          <button
            type="button"
            className="dropdown-box-trigger"
            disabled={!hasOptions}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
          >
            <span>{selectedLabel}</span>
          </button>

          <i className="fa-solid fa-chevron-down" aria-hidden="true" />

          {isOpen && hasOptions && (
            <ul className="dropdown-box-menu" role="listbox">
              {options.map((option) => (
                <li key={`${option.id}-${option.value}`}>
                  <button
                    type="button"
                    className="dropdown-box-option"
                    onClick={() => handleSelect(option)}
                  >
                    {option.value}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {renderRight && <div className="dropdown-box-controls-right">{renderRight(isMobile)}</div>}
      </div>
    </div>
  );
};

export type { DropdownOption, DropdownBoxProps };
export default DropdownBox;
