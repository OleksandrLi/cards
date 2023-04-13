import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WordsRoutes } from "../../constants/routes";
import { selectArray } from "../../helpers/selectArray";
import Loader from "./Loader";
import {
  Container,
  Description,
  EnglishWord,
  NextButton,
  WordContainer,
} from "./styles";

type WordProps = {
  setHelmetWord: React.Dispatch<React.SetStateAction<string>>;
};

const Word: React.FC<WordProps> = ({ setHelmetWord }) => {
  const { type } = useParams();

  const [word, setWord] = useState<string[]>([]);
  const [isRotate, setIsRotate] = useState<boolean>(false);

  const handleSetWord = (newWord: string[]) => {
    setWord(newWord);
    setHelmetWord(newWord[0]);
  };

  const handleNextWord = () => {
    const wordsArray = selectArray(type as WordsRoutes);
    const newWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    handleSetWord(newWord);
  };

  useEffect(() => {
    handleNextWord();
  }, []);

  return (
    <Container>
      <WordContainer
        isRotate={isRotate}
        onAnimationStart={() => {
          setTimeout(() => {
            handleNextWord();
          }, 500);
        }}
        onAnimationEnd={() => {
          setIsRotate(false);
        }}
      >
        {word.length ? (
          <>
            <EnglishWord>{word[0]}</EnglishWord>
            <Description arrayLength={word.length}>{word[1]}</Description>
            {word.length > 2 ? (
              <Description arrayLength={2}>{word[2]}</Description>
            ) : null}
          </>
        ) : (
          <Loader />
        )}
      </WordContainer>

      <NextButton
        onClick={() => {
          setIsRotate(true);
        }}
      >
        Next Word
      </NextButton>
    </Container>
  );
};

export default Word;
