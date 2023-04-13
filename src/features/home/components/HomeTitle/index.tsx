import React, { useEffect, useState } from "react";
import { NavigationTitle } from "./styles";

type HomeTitleProps = {
  handleOpen: () => void;
};

const HomeTitle: React.FC<HomeTitleProps> = ({ handleOpen }) => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <NavigationTitle>
      Select words type{" "}
      {windowSize[0] <= 680 ? (
        <span onClick={handleOpen} className="material-symbols-outlined">
          help
        </span>
      ) : null}
    </NavigationTitle>
  );
};

export default HomeTitle;
