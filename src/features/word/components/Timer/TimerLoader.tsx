import React from "react";
import ContentLoader from "react-content-loader";
import styled from "styled-components";
import { useThemeContext } from "../../../../shared/theme";

const Loader = () => {
  const { selectedTheme } = useThemeContext();

  return (
    <ContentLoader
      speed={2}
      width={100}
      height={41}
      viewBox="0 0 87.63 32"
      backgroundColor={selectedTheme.colors.loader.timer}
      foregroundColor={selectedTheme.colors.loader.slider}
    >
      <rect x="0" y="0" width="100" height="32" />
    </ContentLoader>
  );
};

export default Loader;

export const Container = styled(ContentLoader)`
  margin-top: 0;
`;
