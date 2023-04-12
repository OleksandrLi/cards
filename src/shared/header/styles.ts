import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  height: 80px;
  width: 100%;
  background-color: #e8eef9;
  display: grid;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  box-shadow: rgb(0, 0, 0) 0 5px 15px -10px;
  z-index: 10;

  a {
    padding: 5px 10px;
    max-width: max-content;
    margin: 0 auto;
  }

  @media (max-width: 680px) {
    height: 60px;
  }
`;

// export const MainMenuButton = styled(Link)`
//   font-size: 28px;
//   font-weight: 600;
//   margin-left: 24px;
// `;

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
