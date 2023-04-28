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
  border: 2px solid #8d8d8d;
  padding: 7px 12px;
  font-size: 18px;
  color: #000000;
  border-radius: 10px;

  &:focus {
    border: 2px solid #383838;
    outline: none;
  }
`;
