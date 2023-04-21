import React, { useEffect, useState } from "react";
import { clearStorage } from "../../helpers/clearStorage";
import ModalWindow from "../../shared/modal";
import HomeTitle from "./components/HomeTitle";
import RulesModal from "./components/RulesModal";
import Settings from "./components/Settings";
import TypesList from "./components/TypesList";
import { ButtonsContainer, HomeContainer, RulesButton } from "./styles";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
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
        <HomeTitle handleOpen={handleOpen} />
        <TypesList isSettingsChecked={isChecked} />
        <ButtonsContainer>
          <RulesButton onClick={handleOpen}>Rules of the game</RulesButton>
          <Settings isChecked={isChecked} toggleCheck={toggleCheck} />
        </ButtonsContainer>
      </HomeContainer>
      <ModalWindow isOpen={isModalOpen} onClose={handleClose} hasCloseButton>
        <RulesModal />
      </ModalWindow>
    </>
  );
};

export default Home;
