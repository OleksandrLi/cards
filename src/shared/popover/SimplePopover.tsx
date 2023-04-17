import React from "react";
import { Container } from "./styles";

export type PopoverProps = {
  isOpen: boolean;
  positionX?: number;
  positionY?: number;
  children: React.ReactNode;
};

const Popover: React.FC<PopoverProps> = ({
  isOpen,
  positionX = 75,
  positionY = 100,
  children,
}) => {
  return (
    <Container isOpen={isOpen} positionX={positionX} positionY={positionY}>
      {children}
    </Container>
  );
};

export default Popover;
