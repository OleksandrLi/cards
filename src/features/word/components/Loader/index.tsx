import React from "react";
import ContentLoader from "react-content-loader";

const Loader = () => (
  <ContentLoader
    speed={2}
    width={260}
    height={183}
    viewBox="0 0 260 163"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="30" y="10" rx="0" ry="0" width="190" height="53" />
    <rect x="60" y="83" rx="0" ry="0" width="130" height="27" />
    <rect x="0" y="130" rx="0" ry="0" width="260" height="43" />
  </ContentLoader>
);

export default Loader;
