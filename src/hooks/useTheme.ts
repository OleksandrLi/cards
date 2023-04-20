import { useEffect, useState } from "react";
import { getSettingsTheme, setSettingsTheme } from "../theme/getTheme";

export const useTheme = () => {
  const themes = getSettingsTheme("all-themes");
  const [theme, setTheme] = useState(themes.data.light);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode: string) => {
    setSettingsTheme("theme", mode);
    setTheme(mode);
  };

  useEffect(() => {
    const localTheme = getSettingsTheme("theme");
    localTheme ? setTheme(localTheme) : setTheme(themes.data.light);
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setMode };
};
