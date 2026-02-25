import { useEffect, useState } from "react";
import "./styles.css";
interface Props {
  children?: React.ReactNode;
  isHeaderVisible?: boolean;
  buttonText?: string;
}

const MOBILE_BREAKPOINT = 768;
const Filter: React.FC<Props> = ({
  children,
  isHeaderVisible = false,
  buttonText = "Filter",
}) => {
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

  return (
    <div className="filter-container max-width-screen">
      {isHeaderVisible && (
        <div className="filter-top">
          <h3>{"Filter Projects"}</h3>
          <span className="filter-count">
            {"Showing"} <span className="filter-count-active">{"12"}</span>{" "}
            {"of"}
            <span> {"12"}</span> {"projects"}
          </span>
        </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: isMobile ? "flex-end" : "flex-start",
          width: "100%",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        {isMobile ? (
          <button type="submit" className="btn btn-dark btn-sm">
            {buttonText}
          </button>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default Filter;
