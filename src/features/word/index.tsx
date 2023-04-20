import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WordsRoutes } from "../../constants/routes";
import { selectArray } from "../../helpers/selectArray";
import Next from "./components/NextButton";
import Timer from "./components/Timer";
import WordCart from "./components/WordCart";
import { Container } from "./styles";

type WordProps = {
  setHelmetWord: React.Dispatch<React.SetStateAction<string>>;
};

const Word: React.FC<WordProps> = ({ setHelmetWord }) => {
  const timeForWord = localStorage.getItem("time");

  const { type } = useParams();

  const prevWord = localStorage.getItem("word");

  const [word, setWord] = useState<string[]>(
    prevWord ? prevWord.split(",") : []
  );
  const [isRotate, setIsRotate] = useState<boolean>(false);

  const handleSetWord = (newWord: string[]) => {
    setWord(newWord);
    localStorage.setItem("word", `${JSON.stringify(newWord)}`);
    setHelmetWord(newWord[0]);
  };

  const handleNextWord = () => {
    const wordsArray = selectArray(type as WordsRoutes);
    const newWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    handleSetWord(newWord);
    localStorage.setItem("word", `${newWord}`);
  };

  useEffect(() => {
    if (!prevWord) {
      handleNextWord();
    } else {
      setHelmetWord(prevWord.split(",")[0]);
    }
  }, []);

  useEffect(() => {
    return () => {
      localStorage.removeItem("time");
      localStorage.removeItem("leftForThisWord");
      localStorage.removeItem("word");
    };
  }, []);

  return (
    <Container>
      {timeForWord ? <Timer isRotate={isRotate} /> : null}
      <WordCart
        word={word}
        setIsRotate={setIsRotate}
        isRotate={isRotate}
        handleNextWord={handleNextWord}
      />
      <Next setIsRotate={setIsRotate} />
    </Container>
  );
};

export default Word;
