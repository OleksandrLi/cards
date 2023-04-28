import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES, WordsRoutes } from "../../../../constants/routes";
import { ButtonBlue, ButtonOrange } from "../../../../shared/button";
import Input from "../../../../shared/input";
import { ButtonsContainer, Container, Title } from "./styles";

type MultiplayerModalProps = {
  handleCloseModal: () => void;
};

const MultiplayerModal: React.FC<MultiplayerModalProps> = ({
  handleCloseModal,
}) => {
  const { type } = useParams();
  const navigate = useNavigate();

  const [value, setValue] = useState("");

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleCreateGame = () => {
    handleCloseModal();
    navigate(ROUTES.dynamic.wordsCard(type as WordsRoutes));
  };

  return (
    <Container>
      <Title>Приєднатись до гри</Title>
      <Input value={value} onChange={onChangeName} />
      <ButtonsContainer>
        <ButtonOrange onClick={handleCloseModal}>Back</ButtonOrange>
        <ButtonBlue onClick={handleCreateGame}>Next</ButtonBlue>
      </ButtonsContainer>
    </Container>
  );
};

export default MultiplayerModal;
