import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WordsRoutes } from "../../constants/routes";
import { clearStorage } from "../../helpers/clearStorage";
import { getTimeForWord, SAVED_WORD } from "../../helpers/getStorageItem";
import { selectArray } from "../../helpers/selectArray";
import Buttons from "./components/Buttons";
import Timer from "./components/Timer";
import WordCart from "./components/WordCart";
import { Container } from "./styles";

type WordProps = {
  setHelmetWord: React.Dispatch<React.SetStateAction<string>>;
};

const Word: React.FC<WordProps> = ({ setHelmetWord }) => {
  const timeForWord = getTimeForWord();

  const { type } = useParams();

  const [word, setWord] = useState<string[]>(
    SAVED_WORD ? SAVED_WORD.split(",") : []
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
    if (!SAVED_WORD) {
      handleNextWord();
    } else {
      setHelmetWord(SAVED_WORD.split(",")[0]);
    }
  }, []);

  useEffect(() => {
    return () => {
      clearStorage();
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
      <Buttons isRotate={isRotate} setIsRotate={setIsRotate} />
    </Container>
  );
};

export default Word;
