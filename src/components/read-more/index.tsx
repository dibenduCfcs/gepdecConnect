import { useState, useEffect } from "react";
import "./styles.css";

interface Props {
  value?: string;
  color?: string;
}

const ReadMoreCard: React.FC<Props> = ({ value = "", color = "#E98C20" }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;

      setIsMobile(width <= 767);
      setIsTablet(width > 767 && width <= 1024);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // ✅ Dynamic limit based on device
  const characterLimit = isMobile ? 90 : isTablet ? 120 : 155;

  const showButton = value.length > characterLimit;

  return (
    <div className="read-more-card">
      <p className={`it-anc-description ${isExpanded ? "expanded" : ""}`}>
        {isExpanded ? value : value.slice(0, characterLimit)}
      </p>

      {showButton && (
        <button
          style={{ color }}
          className="read-more-btn"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default ReadMoreCard;
