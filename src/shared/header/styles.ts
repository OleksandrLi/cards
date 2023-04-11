import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  height: 80px;
  width: 100%;
  background-color: #e8eef9;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  box-shadow: rgb(0, 0, 0) 0 5px 15px -10px;
  z-index: 10;
`;

export const HeaderTitle = styled.h1`
  font-size: 40px;
  font-weight: 400;
  font-family: "Pacifico", cursive;
`;
