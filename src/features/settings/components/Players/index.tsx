import React from "react";
import Checkbox from "../../../../shared/checkbox";
import { Container, GameModeList, Title } from "./styles";

type PlayersProps = {
  playersMode: { one: boolean; two: boolean };
  setPlayersMode: React.Dispatch<
    React.SetStateAction<{ one: boolean; two: boolean }>
  >;
};

const Players: React.FC<PlayersProps> = ({ playersMode, setPlayersMode }) => {
  const handleOneMode = () => {
    setPlayersMode({ one: true, two: false });
  };

  const handleTwoMode = () => {
    setPlayersMode({ one: false, two: true });
  };

  return (
    <Container>
      <Title>Select game mode</Title>
      <GameModeList>
        <li>
          <Checkbox
            isChecked={playersMode.one}
            toggleCheck={handleOneMode}
            title={" Solo game"}
          />
        </li>
        <li>
          <Checkbox
            isChecked={playersMode.two}
            toggleCheck={handleTwoMode}
            title={"Two players mode"}
          />
        </li>
      </GameModeList>
    </Container>
  );
};

export default Players;
