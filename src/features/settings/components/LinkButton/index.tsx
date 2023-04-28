import dayjs from "dayjs";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES, WordsRoutes } from "../../../../constants/routes";
import { Next } from "./styles";

type CreateGameButtonProps = {
  value: number;
  playersMode: { one: boolean; two: boolean };
  handleOpenModal: () => void;
};

const CreateGameButton: React.FC<CreateGameButtonProps> = ({
  value,
  playersMode,
  handleOpenModal,
}) => {
  const { type } = useParams();
  const navigate = useNavigate();

  const onCreateClick = () => {
    if (value) {
      localStorage.setItem("time", `${value}`);
      const time = dayjs().add(Number(value), "seconds").startOf("seconds");
      localStorage.setItem("leftForThisWord", `${time}`);
    }
    if (playersMode.two) {
      handleOpenModal();
    } else {
      navigate(ROUTES.dynamic.wordsCard(type as WordsRoutes));
    }
  };

  return <Next onClick={onCreateClick}>Create Game</Next>;
};

export default CreateGameButton;
