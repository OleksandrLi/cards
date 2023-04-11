import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WordsRoutes } from "../../constants/routes";
import { selectArray } from "../../helpers/selectArray";

const Word = () => {
  const { type } = useParams();

  const [word, setWord] = useState<string[]>([]);

  useEffect(() => {
    if (!word.length) {
      const wordsArray = selectArray(type as WordsRoutes);
      const newWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
      setWord(newWord);
    }
  }, [word]);

  return (
    <div>
      {word.length ? (
        <>
          <div>{word[0]}</div>
          <div>{word[1]}</div>
          {word.length > 2 ? <div>{word[2]}</div> : null}
        </>
      ) : null}
    </div>
  );
};

export default Word;
