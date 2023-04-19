import dayjs from "dayjs";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { ROUTES, WordsRoutes } from "../../../../constants/routes";
import { Next } from "./styles";

type LinkButtonProps = {
  value: number;
};

const LinkButton: React.FC<LinkButtonProps> = ({ value }) => {
  const { type } = useParams();

  const onClickLink = () => {
    if (value) {
      localStorage.setItem("time", `${value}`);
      const time = dayjs().add(Number(value), "seconds").startOf("seconds");
      localStorage.setItem("leftForThisWord", `${time}`);
    }
  };

  return (
    <Link to={ROUTES.dynamic.wordsCard(type as WordsRoutes)}>
      <Next onClick={onClickLink}>Game Start</Next>
    </Link>
  );
};

export default LinkButton;
