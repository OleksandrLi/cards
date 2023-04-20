import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { useTheme } from "../../hooks/useTheme";
import { getSettingsTheme } from "../../theme/getTheme";
import { useThemeContext } from "../theme";
import Toggle from "../toggle";
import { HeaderContainer, HeaderTitle, HeaderToggleContainer } from "./styles";

const Header: React.FC = () => {
  const { setSelectedTheme } = useThemeContext();
  const { theme, setMode } = useTheme();

  const [isCheckedToggle, setIsCheckedToggle] = useState<boolean>(false);

  const themes = getSettingsTheme("all-themes");

  const switchTheme = () => {
    if (theme.type === "light") {
      setMode(themes.data.dark);
      setSelectedTheme(themes.data.dark);
    } else {
      setMode(themes.data.light);
      setSelectedTheme(themes.data.light);
    }
  };

  useEffect(() => {
    if (theme.type === "light") {
      setIsCheckedToggle(false);
    } else {
      setIsCheckedToggle(true);
    }
  }, [theme]);

  return (
    <HeaderContainer>
      <Link to={ROUTES.home}>
        <HeaderTitle>Words</HeaderTitle>
      </Link>
      <HeaderToggleContainer>
        <Toggle isChecked={isCheckedToggle} onChange={switchTheme} />
      </HeaderToggleContainer>
    </HeaderContainer>
  );
};

export default Header;
