import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WordsRoutes } from "../../constants/routes";
import { clearStorage } from "../../helpers/clearStorage";
import { getTimeForWord, SAVED_WORD } from "../../helpers/getStorageItem";
import { selectArray } from "../../helpers/selectArray";
import { useQuery } from "../../hooks/useQuery";
import { getGameApi } from "./api";
import SoloGame from "./components/SoloGame";
import TwoGame from "./components/TwoGame";
import WaitingPlayersRoom from "./components/WaitingPlayersRoom";
import { Container } from "./styles";
import { Game } from "./types";

type WordProps = {
  setHelmetWord: React.Dispatch<React.SetStateAction<string>>;
};

const Word: React.FC<WordProps> = ({ setHelmetWord }) => {
  const gameId = useQuery().get("gameId");
  const timeForWord = getTimeForWord();

  const { type } = useParams();

  const [game, setGame] = useState<null | Game>(null);

  const [word, setWord] = useState<string[]>(
    SAVED_WORD ? SAVED_WORD.split(",") : []
  );
  const [isRotate, setIsRotate] = useState<boolean>(false);

  const handleSetWord = (newWord: string[]) => {
    setWord(newWord);
    localStorage.setItem("word", `${JSON.stringify(newWord)}`);
    setHelmetWord(newWord[0]);
  };

  const handleNextWord = () => {
    const wordsArray = selectArray(type as WordsRoutes);
    const newWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    handleSetWord(newWord);
    localStorage.setItem("word", `${newWord}`);
  };

  useEffect(() => {
    if (!SAVED_WORD) {
      handleNextWord();
    } else {
      setHelmetWord(SAVED_WORD.split(",")[0]);
    }
  }, []);

  useEffect(() => {
    return () => {
      clearStorage();
    };
  }, []);

  useEffect(() => {
    if (gameId) {
      getGameApi(gameId).then((resp) => {
        setGame(resp.data);
      });
    }
  }, []);

  return (
    <Container>
      {game ? (
        game.players.length < 2 ? (
          <WaitingPlayersRoom idForShare={game.gameId} />
        ) : (
          <TwoGame timeForWord={timeForWord} isRotate={isRotate} />
        )
      ) : (
        <SoloGame
          word={word}
          isRotate={isRotate}
          setIsRotate={setIsRotate}
          handleNextWord={handleNextWord}
        />
      )}
    </Container>
  );
};

export default Word;
