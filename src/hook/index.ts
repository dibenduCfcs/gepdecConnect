import { useEffect, useState } from "react";

export const useWindowDimension = (handleResize: (e?: UIEvent) => void) => {
  useEffect(() => {
    window.addEventListener("resize", (e) => handleResize(e));

    // run once on mount
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);
};

export const useIsMobileWindow = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);

    // run once on mount
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};
