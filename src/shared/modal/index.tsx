import React from "react";
import { Background, Box, CloseButton, Container } from "./styles";

type ModalWindowProps = {
  isOpen: boolean;
  onClose: () => void;
  hasCloseButton?: boolean;
  children: React.ReactNode;
};

const ModalWindow: React.FC<ModalWindowProps> = ({
  isOpen,
  onClose,
  hasCloseButton,
  children,
}) => {
  return isOpen ? (
    <Container>
      <Background onClick={onClose} />
      <Box>
        {hasCloseButton ? (
          <CloseButton onClick={onClose}>
            <span className="material-symbols-outlined">close</span>
          </CloseButton>
        ) : null}
        {children}
      </Box>
    </Container>
  ) : null;
};

export default ModalWindow;
