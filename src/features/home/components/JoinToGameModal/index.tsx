import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES, WordsRoutes } from "../../../../constants/routes";
import { ButtonBlue, ButtonOrange } from "../../../../shared/button";
import Input from "../../../../shared/input";
import { ButtonsContainer, Container, Title } from "./styles";

type JoinToGameModalProps = {
  handleCloseModal: () => void;
};

const JoinToGameModal: React.FC<JoinToGameModalProps> = ({
  handleCloseModal,
}) => {
  const { type } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [id, setId] = useState("");

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handleCreateGame = () => {
    handleCloseModal();
    navigate(ROUTES.dynamic.wordsCard(type as WordsRoutes));
  };

  return (
    <Container>
      <Title>Введіть своє ім&apos;я</Title>
      <Input
        title={"Введіть id гри, яким має поділитись гравець, що створив гру"}
        value={id}
        onChange={onChangeId}
      />
      <Input title={"Введіть своє ім'я"} value={name} onChange={onChangeName} />

      <ButtonsContainer>
        <ButtonOrange onClick={handleCloseModal}>Back</ButtonOrange>
        <ButtonBlue onClick={handleCreateGame}>Next</ButtonBlue>
      </ButtonsContainer>
    </Container>
  );
};

export default JoinToGameModal;
