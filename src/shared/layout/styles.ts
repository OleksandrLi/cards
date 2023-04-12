import styled from "styled-components";
// @ts-ignore
import mainBackground from "../../assets/img/main-background.jpg";

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  font-family: "Roboto", sans-serif;
`;

export const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 80px);
  margin-top: 80px;
  //background-image: url(${mainBackground});
  //background-position: center center;
  //background-size: contain;
  //background-repeat: no-repeat;
  //filter: opacity(0.2);

  @media (max-width: 680px) {
    min-height: 100vh;
    margin-top: 0;
  }
`;

export const Main = styled.div`
  margin: 80px auto 0;
  width: 100%;
  max-width: 600px;
  min-height: 100%;

  @media (max-width: 680px) {
    margin-top: 60px;
  }
`;
