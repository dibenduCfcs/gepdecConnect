import React, { useState } from "react";
import { useWindowDimension } from "../../hook";
import Overlay from "../overlay";
import "./styles.css";
import FilterIcon from "../../assets/custom-svg/filter";

interface Props {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  title?: string;
  leftTitle?: string;
  headerBackground?: string;
  iconColor?: string;
}

const SideBar: React.FC<Props> = ({
  children,
  onClick,
  title = "",
  headerBackground = "linear-gradient(135deg, #fff8ee 0%, #fffcf7 100%)",
  iconColor = "#E98C20",
  leftTitle = "",
}) => {
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
        <div className="sidebar-filter-head-con" style={{ background: headerBackground }}>
          <FilterIcon color={iconColor} />
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
          <h3>{leftTitle}</h3>
          <button
            type="button"
            className="btn btn-dark btn-sm btn-custom-sm"
            onClick={() => setIsOpen(true)}
          >
            {"Filter"}
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
