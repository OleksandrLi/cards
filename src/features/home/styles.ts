import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.colors.home.bg};
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.colors.home.border};
  box-shadow: 0 0 15px 0 ${({ theme }) => theme.colors.home.shadow};

  @media (max-width: 680px) {
    padding: 20px 0;
    box-shadow: none;
    border: none;
  }
`;

export const RulesButton = styled.div`
  display: block;
  margin-top: 10px;
  padding: 10px 15px;
  font-size: 22px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.home.rulesText};
  cursor: pointer;

  @media (max-width: 680px) {
    display: none;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;
