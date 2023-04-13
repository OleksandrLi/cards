import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 20px;
  background: #ffffff;
  border-radius: 15px;
  border: 1px solid #e6e6e6;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.6);

  @media (max-width: 680px) {
    padding: 20px 0;
    box-shadow: none;
    border: none;
  }
`;

export const RulesButton = styled.div`
  display: block;
  margin-top: 10px;
  margin-left: 15px;
  padding: 10px 15px;
  font-size: 22px;
  font-weight: 500;
  color: #0402a3;
  cursor: pointer;

  @media (max-width: 680px) {
    display: none;
  }
`;
