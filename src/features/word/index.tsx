import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WordsRoutes } from "../../constants/routes";
import { selectArray } from "../../helpers/selectArray";
import { Description, EnglishWord, NextButton, WordContainer } from "./styles";

const Word = () => {
  const { type } = useParams();

  const [word, setWord] = useState<string[]>([]);

  const handleNextWord = () => {
    const wordsArray = selectArray(type as WordsRoutes);
    const newWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    setWord(newWord);
  };

  useEffect(() => {
    if (!word.length) {
      handleNextWord();
    }
  }, [word]);

  return (
    <>
      {word.length ? (
        <>
          <WordContainer>
            <EnglishWord>{word[0]}</EnglishWord>
            <Description arrayLength={word.length}>{word[1]}</Description>
            {word.length > 2 ? (
              <Description arrayLength={2}>{word[2]}</Description>
            ) : null}
          </WordContainer>
          <NextButton onClick={handleNextWord}>Next Word</NextButton>
        </>
      ) : null}
    </>
  );
};

export default Word;
