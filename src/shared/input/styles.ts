import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Title = styled.label`
  color: ${({ theme }) => theme.colors.slider.title};
  font-weight: 500;
  padding-bottom: 6px;
`;

export const StyledInput = styled.input`
  border: 1px solid #8d8d8d;
  padding: 6px 10px;
  font-size: 16px;
  color: #000000;
  border-radius: 8px;

  &:focus {
    border: 1px solid #000000;
    outline: none;
  }
`;
