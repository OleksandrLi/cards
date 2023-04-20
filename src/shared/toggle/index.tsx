import React from "react";
import { Background, Slider, ToggleContainer } from "./styles";

type ToggleProps = {
  isChecked: boolean;
  onChange: () => void;
};

const Toggle: React.FC<ToggleProps> = ({ isChecked, onChange }) => {
  const handleToggle = () => {
    onChange();
  };

  return (
    <ToggleContainer onClick={handleToggle}>
      <Background />
      <Slider isChecked={isChecked} />
    </ToggleContainer>
  );
};

export default Toggle;
