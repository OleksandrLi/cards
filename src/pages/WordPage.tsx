import React from "react";
import { Helmet } from "react-helmet";
import Word from "../features/word";

const WordPage = () => {
  return (
    <>
      <Helmet title="Word" />
      <Word />
    </>
  );
};

export default WordPage;
