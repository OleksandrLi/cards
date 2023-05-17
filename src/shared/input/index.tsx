import React from "react";
import { Container, StyledInput, Title } from "./styles";

export type InputProps = {
  title?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  disabled?: boolean;
};

const Input: React.FC<InputProps> = ({
  title,
  value,
  onChange,
  onClick,
  disabled = false,
}) => {
  return (
    <Container onClick={onClick}>
      {title ? <Title htmlFor={value}>{title}</Title> : null}
      <StyledInput
        id={value}
        type="text"
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </Container>
  );
};

export default Input;
