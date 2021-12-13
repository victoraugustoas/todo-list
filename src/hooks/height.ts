import { useEffect, useState } from "react";

export const useHeight = () => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    // change height of slider
    const changeHeight = () => {
      setHeight(document.documentElement.clientHeight);
    };

    window.addEventListener("resize", changeHeight);
    changeHeight();

    return () => {
      window.removeEventListener("resize", changeHeight);
    };
  }, []);

  return height;
};
