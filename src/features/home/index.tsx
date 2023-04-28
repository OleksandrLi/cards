import React, { useEffect, useState } from "react";
import { clearStorage } from "../../helpers/clearStorage";
import ModalWindow from "../../shared/modal";
import HomeTitle from "./components/HomeTitle";
import JoinToGameModal from "./components/JoinToGameModal";
import RulesModal from "./components/RulesModal";
import Settings from "./components/Settings";
import TypesList from "./components/TypesList";
import { ButtonsContainer, HomeContainer, RulesButton } from "./styles";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState({
    rules: false,
    joinGame: false,
  });
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleOpenRules = () => {
    setIsModalOpen({
      rules: true,
      joinGame: false,
    });
  };

  const handleOpenMode = () => {
    setIsModalOpen({
      rules: false,
      joinGame: true,
    });
  };

  const handleClose = () => {
    setIsModalOpen({
      rules: false,
      joinGame: false,
    });
  };

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    clearStorage();
  }, []);

  return (
    <>
      <HomeContainer>
        <HomeTitle handleOpen={handleOpenRules} />
        <TypesList
          isSettingsChecked={isChecked}
          handleOpenMode={handleOpenMode}
        />
        <ButtonsContainer>
          <RulesButton onClick={handleOpenRules}>Rules of the game</RulesButton>
          <Settings isChecked={isChecked} toggleCheck={toggleCheck} />
        </ButtonsContainer>
      </HomeContainer>
      <ModalWindow
        isOpen={isModalOpen.rules}
        onClose={handleClose}
        hasCloseButton
      >
        <RulesModal />
      </ModalWindow>
      <ModalWindow
        isOpen={isModalOpen.joinGame}
        onClose={handleClose}
        hasCloseButton
      >
        <JoinToGameModal handleCloseModal={handleClose} />
      </ModalWindow>
    </>
  );
};

export default Home;
