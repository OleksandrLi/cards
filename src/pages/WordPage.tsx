import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Word from "../features/word";

const WordPage = () => {
  const [helmetWord, setHelmetWord] = useState<string>("");

  return (
    <>
      <Helmet title={`Word - ${helmetWord}` || "Word"} />
      <Word setHelmetWord={setHelmetWord} />
    </>
  );
};

export default WordPage;
