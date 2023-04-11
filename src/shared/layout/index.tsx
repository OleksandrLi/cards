import React from "react";
import Header from "../header";
import { LayoutContainer, Main, MainContainer } from "./styles";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <MainContainer>
        <Main>{children}</Main>
      </MainContainer>
    </LayoutContainer>
  );
};

export default Layout;
