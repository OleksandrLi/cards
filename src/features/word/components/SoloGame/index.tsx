import React from "react";
import Buttons from "./Buttons";
import WordCart from "./WordCart";

type SoloGameProps = {
  word: string[];
  isRotate: boolean;
  setIsRotate: React.Dispatch<React.SetStateAction<boolean>>;
  handleNextWord: () => void;
};

const SoloGame: React.FC<SoloGameProps> = ({
  isRotate,
  word,
  setIsRotate,
  handleNextWord,
}) => {
  return (
    <>
      <WordCart
        word={word}
        setIsRotate={setIsRotate}
        isRotate={isRotate}
        handleNextWord={handleNextWord}
      />
      <Buttons isRotate={isRotate} setIsRotate={setIsRotate} />
    </>
  );
};

export default SoloGame;
