import React from "react";
import Header from "../header";
import { LayoutContainer, MainContainer } from "./styles";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <MainContainer>{children}</MainContainer>
    </LayoutContainer>
  );
};

export default Layout;
