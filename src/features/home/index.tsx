import React, { useState } from "react";
import ModalWindow from "../../shared/modal";
import HomeTitle from "./components/HomeTitle";
import RulesModal from "./components/RulesModal";
import TypesList from "./components/TypesList";
import { HomeContainer, RulesButton } from "./styles";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <HomeContainer>
        <HomeTitle handleOpen={handleOpen} />
        <TypesList />
        <RulesButton onClick={handleOpen}>Rules of the game</RulesButton>
      </HomeContainer>
      <ModalWindow isOpen={isModalOpen} onClose={handleClose} hasCloseButton>
        <RulesModal />
      </ModalWindow>
    </>
  );
};

export default Home;
