import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
  color: ${({ theme }) => theme.colors.wordCard.timer};
  font-size: 34px;
  font-weight: 600;
  text-align: center;
`;
