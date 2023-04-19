import styled from "styled-components";

export const NextButton = styled.div`
  font-size: 24px;
  font-weight: 500;
  width: max-content;
  padding: 10px 30px;
  text-align: center;
  margin: 30px auto 100px;
  color: orange;
  border: solid 2px orange;
  border-radius: 25px;
  cursor: pointer;
  transition: 0.2s;

  &:hover,
  &:active {
    background-color: rgba(255, 165, 0, 0.2);
  }

  @media (max-width: 680px) {
    align-self: flex-end;
    margin: 20px auto 30px;
    font-size: 28px;
    border-width: 2px;
  }
`;
