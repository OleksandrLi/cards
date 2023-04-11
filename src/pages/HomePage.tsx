import React from "react";
import { Helmet } from "react-helmet";
import Home from "../features/home";

const HomePage = () => {
  return (
    <>
      <Helmet title="Words" />
      <Home />
    </>
  );
};

export default HomePage;
