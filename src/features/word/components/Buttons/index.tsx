import React, { useState } from "react";
import {
  GUESSED_POINTS,
  PASSED_POINTS,
} from "../../../../helpers/getStorageItem";
import {
  ButtonText,
  Container,
  NextButton,
  Points,
  SkipButton,
} from "./styles";

type ButtonsProps = {
  isRotate: boolean;
  setIsRotate: React.Dispatch<React.SetStateAction<boolean>>;
};

const Buttons: React.FC<ButtonsProps> = ({ isRotate, setIsRotate }) => {
  const [passedPoints, setPassedPoints] = useState<number>(
    Number(PASSED_POINTS) || 0
  );
  const [guessedPoints, setGuessedPoints] = useState<number>(
    Number(GUESSED_POINTS) || 0
  );

  const dragOverButton = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handlePassWord = () => {
    if (isRotate) {
      return;
    }
    const newPoints = passedPoints + 1;
    localStorage.setItem("passedPoints", `${newPoints}`);
    setPassedPoints(newPoints);
    setIsRotate(true);
  };

  const handleNextWord = () => {
    if (isRotate) {
      return;
    }
    const newPoints = guessedPoints + 1;
    localStorage.setItem("guessedPoints", `${newPoints}`);
    setGuessedPoints(guessedPoints + 1);
    setIsRotate(true);
  };

  return (
    <Container>
      <SkipButton
        onClick={handlePassWord}
        onDrop={() => {
          handlePassWord();
        }}
        onDragOver={(e) => {
          dragOverButton(e);
        }}
      >
        <ButtonText>Skip card</ButtonText>
        <Points>{passedPoints}</Points>
      </SkipButton>
      <NextButton
        onClick={handleNextWord}
        onDrop={() => {
          handleNextWord();
        }}
        onDragOver={(e) => {
          dragOverButton(e);
        }}
      >
        <ButtonText>Next word</ButtonText>
        <Points>{guessedPoints}</Points>
      </NextButton>
    </Container>
  );
};

export default Buttons;
