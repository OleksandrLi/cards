import React, { useContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../../hooks/useTheme";
import { setSettingsTheme } from "../../theme/getTheme";
import * as themes from "../../theme/shema.json";

export interface ThemeContext {
  // eslint-disable-next-line
  setSelectedTheme: React.Dispatch<any>;
}

export const ThemeContext = React.createContext<ThemeContext>(
  {} as ThemeContext
);

export function useThemeContext() {
  return useContext(ThemeContext);
}

type ThemeLayoutProps = {
  children: React.ReactNode;
};

const ThemeLayout: React.FC<ThemeLayoutProps> = ({ children }) => {
  // @ts-ignore
  setSettingsTheme("all-themes", themes.default);

  const { theme, themeLoaded } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  return (
    <>
      {themeLoaded ? (
        <ThemeProvider theme={selectedTheme}>
          <ThemeContext.Provider value={{ setSelectedTheme }}>
            {children}
          </ThemeContext.Provider>
        </ThemeProvider>
      ) : null}
    </>
  );
};

export default ThemeLayout;
