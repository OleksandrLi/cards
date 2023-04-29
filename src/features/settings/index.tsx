import React, { useState } from "react";
import ModalWindow from "../../shared/modal";
import Slider from "../../shared/slider";
import { NavigationTitle as Title } from "../home/components/HomeTitle/styles";
import CreateGameButton from "./components/LinkButton";
import MultiplayerModal from "./components/MultiplayerModal";
import Players from "./components/Players";
import { Container } from "./styles";

/*
 * TODO:
 * 2. Вибір налаштувань за допомогою чекбоксів.
 * 3. Збереження налаштувань в сторадж.
 * 5. Видалення налаштувань зі стораджа коли покидаємо тип слів.
 *  */

const LessonSettings: React.FC = () => {
  const [value, setValue] = useState<number>(0);
  const [playersMode, setPlayersMode] = useState({
    one: true,
    two: false,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Title>Settings</Title>
      {/*<Players playersMode={playersMode} setPlayersMode={setPlayersMode} />*/}
      <Slider
        value={value}
        setValue={setValue}
        title={"Select time for each word"}
        step={1}
        min={0}
        max={15}
      />
      <CreateGameButton
        value={value}
        playersMode={playersMode}
        handleOpenModal={handleOpenModal}
      />
      <ModalWindow
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        hasCloseButton
      >
        <MultiplayerModal handleCloseModal={handleCloseModal} />
      </ModalWindow>
    </Container>
  );
};

export default LessonSettings;
