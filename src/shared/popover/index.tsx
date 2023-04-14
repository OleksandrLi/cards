import React from "react";

type ModalWindowProps = {
  isOpen: boolean;
  onClose: () => void;
  hasCloseButton?: boolean;
  children: React.ReactNode;
};

const Popover: React.FC<ModalWindowProps> = ({
  isOpen,
  onClose,
  hasCloseButton,
  children,
}) => {
  return <div>123</div>;
};

export default Popover;
