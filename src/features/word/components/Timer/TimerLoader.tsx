import React from "react";
import ContentLoader from "react-content-loader";
import styled from "styled-components";

const Loader = () => (
  <ContentLoader
    speed={2}
    width={100}
    height={41}
    viewBox="0 0 87.63 32"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="100" height="32" />
  </ContentLoader>
);

export default Loader;

export const Container = styled(ContentLoader)`
  margin-top: 0;
`;
