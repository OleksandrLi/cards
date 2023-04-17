import React, { useEffect, useState } from "react";
import { MobilePopover, SimplePopover } from "../../../../shared/popover";

export type PopoverProps = {
  isOpen: boolean;
  handleClose: () => void;
};

const PopoverContent: React.FC<PopoverProps> = ({ isOpen, handleClose }) => {
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

  const popoverRef = React.createRef() as
    | ((instance: HTMLDivElement | null) => void)
    | React.RefObject<HTMLDivElement>
    | null
    | undefined;

  return (
    <>
      {windowSize[0] <= 680 ? (
        <MobilePopover
          isOpen={isOpen}
          positionX={0}
          positionY={200}
          popoverRef={popoverRef}
          handleClose={handleClose}
          mobileY={30}
        >
          <div>This block is in progress</div>
        </MobilePopover>
      ) : (
        <SimplePopover isOpen={isOpen} positionX={70} positionY={100}>
          <div>This block is in progress</div>
        </SimplePopover>
      )}
    </>
  );
};

export default PopoverContent;
