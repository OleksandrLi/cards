import React from "react";
import { Container, StyledInput, Title } from "./styles";

export type InputProps = {
  title?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ title, value, onChange }) => {
  return (
    <Container>
      {title ? <Title htmlFor={value}>{title}</Title> : null}
      <StyledInput id={value} type="text" value={value} onChange={onChange} />
    </Container>
  );
};

export default Input;
