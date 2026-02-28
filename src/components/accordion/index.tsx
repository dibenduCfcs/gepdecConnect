import type React from "react";
import { useId, useState } from "react";
import arrow from "../../assets/arrow.svg";
import "./styles.css";

interface Props {
  children?: React.ReactNode;
  title?: string;
  disabled?: boolean;
  showArrow?: boolean;
  titleClassName?: string;
  headerClassName?: string;
  bodyClassName?: string;
  component?: "span" | "p" | "h3";
  renderExtra?: () => React.ReactNode;
  arrowColor?: string;
}

const Accordion: React.FC<Props> = ({
  children,
  title = "",
  disabled = false,
  showArrow = true,
  titleClassName = "",
  headerClassName = "",
  bodyClassName = "",
  component: Component = "span",
  renderExtra = () => null,
  arrowColor = "",
}) => {
  const id = useId();
  const [open, setOpen] = useState(true);

  return (
    <div className="accordion">
      <div className="accordion-item">
        <h2 className={`accordion-header ${headerClassName}`}>
          <div
            className="accordion-button custom-accordion-btn"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse-${id}`}
            aria-expanded={open}
            aria-controls={`collapse-${id}`}
            onClick={() => {
              if (!disabled) {
                setOpen(!open);
              }
            }}
          >
            <div className="accordion-title-con">
              {renderExtra()}
              <Component className={`accordion-title ${titleClassName}`}>{title}</Component>
            </div>

            {showArrow && (
              <img
                src={arrow}
                alt="arrow"
                className={`accordion-arrow ${open ? "rotate" : ""}`}
                style={{ color: arrowColor }}
              />
            )}
          </div>
        </h2>

        <div id={`collapse-${id}`} className="accordion-collapse collapse show">
          <div className={`accordion-body ${bodyClassName}`}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
