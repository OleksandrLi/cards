import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";
import socket from "../../../../constants/socket";
import { ButtonBlue, ButtonOrange } from "../../../../shared/button";
import Input from "../../../../shared/input";
import { getGameApi, joinToGameApi } from "../../../word/api";
import { ButtonsContainer, Container, Title } from "./styles";

type JoinToGameModalProps = {
  handleCloseModal: () => void;
};

const JoinToGameModal: React.FC<JoinToGameModalProps> = ({
  handleCloseModal,
}) => {
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
    if (name && id) {
      getGameApi(id).then(() => {
        joinToGameApi({ gameId: id, playerName: name }).then((res) => {
          socket.emit("Join to room", { gameId: id, playerName: name });
          handleCloseModal();
          navigate(
            ROUTES.dynamic.wordsCard(res.data.typeWords, res.data.gameId)
          );
        });
      });
    } else {
      return;
    }
  };

  return (
    <Container>
      <Title>Введіть своє ім&apos;я</Title>
      <Input title={"Введіть id гри"} value={id} onChange={onChangeId} />
      <Input title={"Введіть своє ім'я"} value={name} onChange={onChangeName} />

      <ButtonsContainer>
        <ButtonOrange onClick={handleCloseModal}>Back</ButtonOrange>
        <ButtonBlue onClick={handleCreateGame}>Next</ButtonBlue>
      </ButtonsContainer>
    </Container>
  );
};

export default JoinToGameModal;
