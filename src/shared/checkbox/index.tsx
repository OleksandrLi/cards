import React from "react";
import { Checked, CheckSquare, Container } from "./styles";

export type CheckboxProps = {
  isChecked: boolean;
  title: string;
  toggleCheck: () => void;
};

const Checkbox: React.FC<CheckboxProps> = ({
  isChecked,
  title,
  toggleCheck,
}) => {
  return (
    <Container onClick={toggleCheck}>
      <div>
        <CheckSquare isChecked={isChecked}>
          <span />
        </CheckSquare>
        {isChecked ? (
          <Checked>
            <span className="material-symbols-outlined">check</span>
          </Checked>
        ) : null}
      </div>
      <div>{title}</div>
    </Container>
  );
};

export default Checkbox;
