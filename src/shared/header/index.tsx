import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { HeaderContainer, HeaderTitle } from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      {/*<MainMenuButton to={ROUTES.home}>Home</MainMenuButton>*/}
      <Link to={ROUTES.home}>
        <HeaderTitle>Words</HeaderTitle>
      </Link>
      {/*<div />*/}
    </HeaderContainer>
  );
};

export default Header;
