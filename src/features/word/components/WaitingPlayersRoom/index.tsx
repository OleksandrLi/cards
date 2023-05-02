import React from "react";
import { Container } from "./styles";

type WaitingPlayersRoomProps = {
  isRotate?: boolean;
  setIsRotate?: React.Dispatch<React.SetStateAction<boolean>>;
};

const WaitingPlayersRoom: React.FC<WaitingPlayersRoomProps> = () => {
  return <Container>123</Container>;
};

export default WaitingPlayersRoom;
