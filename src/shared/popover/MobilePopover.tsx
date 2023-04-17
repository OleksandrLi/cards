import React from "react";
import {
  MobileBackground,
  MobileBoxContainer,
  MobileContainer,
  PositionContainer,
} from "./styles";

export type PopoverProps = {
  isOpen: boolean;
  handleClose: () => void;
  popoverRef:
    | ((instance: HTMLDivElement | null) => void)
    | React.RefObject<HTMLDivElement>
    | null
    | undefined;
  mobileY?: number;
  positionX?: number;
  positionY?: number;
  children: React.ReactNode;
};

const Popover: React.FC<PopoverProps> = ({
  isOpen,
  popoverRef,
  handleClose,
  positionX = 75,
  positionY = 100,
  mobileY = 20,
  children,
}) => {
  const onClose = () => {
    handleClose();
  };

  return (
    <MobileContainer isOpen={isOpen}>
      <MobileBackground isOpen={isOpen} onTouchEndCapture={onClose} />
      <PositionContainer ref={popoverRef} mobileY={mobileY}>
        <MobileBoxContainer
          isOpen={isOpen}
          positionX={positionX}
          positionY={positionY}
        >
          {children}
        </MobileBoxContainer>
      </PositionContainer>
    </MobileContainer>
  );
};

export default Popover;
