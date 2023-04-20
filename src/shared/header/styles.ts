import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  height: 80px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.header.bg};
  display: grid;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.header.border};
  box-shadow: ${({ theme }) => theme.colors.header.shadow} 0 5px 15px -10px;
  z-index: 10;

  a {
    padding: 5px 10px;
    max-width: max-content;
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.header.text};
  }

  @media (max-width: 680px) {
    height: 60px;
  }
`;

export const HeaderTitle = styled.h1`
  max-width: max-content;
  margin: 0;
  font-size: 40px;
  font-weight: 400;
  font-family: "Pacifico", cursive;
  text-align: center;

  @media (max-width: 680px) {
    font-size: 30px;
  }
`;

export const HeaderToggleContainer = styled.div`
  position: absolute;
  right: 20px;
`;
