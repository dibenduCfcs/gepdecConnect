import type React from "react";
import { useId, useState } from "react";
import arrow from "../../assets/arrow.svg";
import "./styles.css";

interface Props {
  children?: React.ReactNode;
  title?: string;
}

const Accordion: React.FC<Props> = ({ children, title = "" }) => {
  const id = useId();
  const [open, setOpen] = useState(true);

  return (
    <div className="accordion">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <div
            className="accordion-button custom-accordion-btn"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse-${id}`}
            aria-expanded={open}
            aria-controls={`collapse-${id}`}
            onClick={() => setOpen(!open)}
          >
            <span className="accordion-title">{title}</span>

            <img src={arrow} alt="arrow" className={`accordion-arrow ${open ? "rotate" : ""}`} />
          </div>
        </h2>

        <div id={`collapse-${id}`} className="accordion-collapse collapse show">
          <div className="accordion-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
