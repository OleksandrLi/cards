import React, { useState } from "react";
import {
  GUESSED_POINTS,
  PASSED_POINTS,
} from "../../../../helpers/getStorageItem";
import { useQuery } from "../../../../hooks/useQuery";
import {
  ButtonText,
  Container,
  GuessedButton,
  NextButton,
  Points,
  SkipButton,
} from "./styles";

type ButtonsProps = {
  isRotate: boolean;
  setIsRotate: React.Dispatch<React.SetStateAction<boolean>>;
};

const Buttons: React.FC<ButtonsProps> = ({ isRotate, setIsRotate }) => {
  const gameId = useQuery().get("gameId");

  const [passedPoints, setPassedPoints] = useState<number>(
    Number(PASSED_POINTS) || 0
  );

  const [guessedPoints, setGuessedPoints] = useState<number>(
    Number(GUESSED_POINTS) || 0
  );

  const [isDisableNextButton, setIsDisableNextButton] = useState<boolean>(
    !!gameId
  );

  const handlePassWord = () => {
    if (!isDisableNextButton) {
      return;
    }
    const newPoints = passedPoints + 1;
    localStorage.setItem("passedPoints", `${newPoints}`);
    setPassedPoints(newPoints);
    setIsDisableNextButton(false);
  };

  const handleNextWord = () => {
    if (isRotate) {
      return;
    }
    setIsDisableNextButton(!!gameId);
    setIsRotate(true);
  };

  const handleGuessWord = () => {
    if (!isDisableNextButton) {
      return;
    }
    const newPoints = guessedPoints + 1;
    localStorage.setItem("guessedPoints", `${newPoints}`);
    setGuessedPoints(guessedPoints + 1);
    setIsDisableNextButton(false);
  };

  return (
    <Container>
      {gameId ? (
        <SkipButton onClick={handlePassWord}>
          <ButtonText>Skipped</ButtonText>
          <Points>{passedPoints}</Points>
        </SkipButton>
      ) : null}
      <NextButton disabled={isDisableNextButton} onClick={handleNextWord}>
        Next
      </NextButton>
      {gameId ? (
        <GuessedButton onClick={handleGuessWord}>
          <ButtonText>Guessed</ButtonText>
          <Points>{guessedPoints}</Points>
        </GuessedButton>
      ) : null}
    </Container>
  );
};

export default Buttons;
