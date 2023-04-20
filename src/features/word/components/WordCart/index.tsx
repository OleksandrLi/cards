import dayjs from "dayjs";
import React from "react";
import Loader from "../Loader";
import { Description, EnglishWord, WordContainer } from "./styles";

type WordCartProps = {
  word: string[];
  isRotate: boolean;
  setIsRotate: React.Dispatch<React.SetStateAction<boolean>>;
  handleNextWord: () => void;
};

const WordCart: React.FC<WordCartProps> = ({
  isRotate,
  handleNextWord,
  setIsRotate,
  word,
}) => {
  return (
    <WordContainer
      draggable={true}
      isRotate={isRotate}
      onAnimationStart={() => {
        localStorage.removeItem("leftForThisWord");
        setTimeout(() => {
          handleNextWord();
        }, 500);
      }}
      onAnimationEnd={() => {
        const timeForWord = localStorage.getItem("time");
        const time = dayjs()
          .add(Number(timeForWord), "seconds")
          .startOf("seconds");
        localStorage.setItem("leftForThisWord", `${time}`);
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
  );
};

export default WordCart;
