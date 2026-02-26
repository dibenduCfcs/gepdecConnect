import { useEffect } from "react";

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
