import styled from "styled-components";
// @ts-ignore
import mainBackground from "../../assets/img/main-background.jpg";

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 80px);
  margin-top: 80px;
  background-image: url(${mainBackground});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  filter: opacity(0.2);
`;
