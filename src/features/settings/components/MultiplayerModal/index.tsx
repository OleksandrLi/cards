import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES, WordsRoutes } from "../../../../constants/routes";
import { ButtonBlue, ButtonOrange } from "../../../../shared/button";
import Input from "../../../../shared/input";
import useWord from "../../../word/hooks";
import { ButtonsContainer, Container, Title } from "./styles";

type MultiplayerModalProps = {
  duration: number;
  handleCloseModal: () => void;
};

const MultiplayerModal: React.FC<MultiplayerModalProps> = ({
  duration,
  handleCloseModal,
}) => {
  const { type } = useParams();
  const navigate = useNavigate();
  const { onCreateRoom } = useWord();

  const [playerName, setPlayerName] = useState<string>("");

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value);
  };

  const createCallBack = (gameId: string) => {
    handleCloseModal();
    navigate(ROUTES.dynamic.wordsCard(type as WordsRoutes, gameId));
  };

  const handleCreateGame = () => {
    if (playerName) {
      onCreateRoom(
        { playerName, duration, typeWords: type as string },
        createCallBack
      );
    } else {
      return;
    }
  };

  return (
    <Container>
      <Title>Створити гру</Title>
      <Input
        title={`Введіть своє ім'я`}
        value={playerName}
        onChange={onChangeName}
      />
      <ButtonsContainer>
        <ButtonOrange onClick={handleCloseModal}>Back</ButtonOrange>
        <ButtonBlue onClick={handleCreateGame}>Next</ButtonBlue>
      </ButtonsContainer>
    </Container>
  );
};

export default MultiplayerModal;
