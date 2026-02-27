import React, { useState } from "react";
import { useWindowDimension } from "../../hook";
import filter from "../../assets/filter.svg";
import Overlay from "../overlay";
import "./styles.css";

interface Props {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  title?: string;
}

const SideBar: React.FC<Props> = ({ children, onClick, title = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useWindowDimension(() => {
    const isMobile = window.innerWidth < 768;
    setIsMobile(isMobile);

    if (!isMobile) {
      setIsOpen(false);
    }
  });

  const renderContainer = () => {
    return (
      <div className="sidebar-left-container" onClick={onClick}>
        <div className="sidebar-filter-head-con">
          <img src={filter} alt="inc-anc-filter" />
          <p>{title}</p>
        </div>
        <div className="accordion-container">{children}</div>
        {isMobile && (
          <div className="btn-container">
            <button
              type="button"
              className="btn btn-outline-warning btn-sm btn-custom"
              onClick={() => setIsOpen(false)}
            >
              {"Clear"}
            </button>
            <button
              type="button"
              className="btn btn-warning btn-sm btn-custom"
              onClick={() => setIsOpen(false)}
            >
              {"Apply"}
            </button>
          </div>
        )}
      </div>
    );
  };
  return (
    <React.Fragment>
      {isMobile && (
        <div className="sidebar-mobile-filter">
          <button
            type="button"
            className="btn btn-dark btn-sm btn-custom-sm"
            onClick={() => setIsOpen(true)}
          >
            {title}
          </button>
        </div>
      )}
      <Overlay isOpen={isOpen} onClick={() => setIsOpen(false)}>
        {renderContainer()}
      </Overlay>
      <div className="sidebar-render-left">{renderContainer()}</div>
    </React.Fragment>
  );
};

export default SideBar;
