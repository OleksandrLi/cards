import React from "react";
import Slider from "../../shared/slider";
import { NavigationTitle as Title } from "../home/components/HomeTitle/styles";
import { HomeContainer as Container } from "../home/styles";

/*
 * TODO:
 * 2. Вибір налаштувань за допомогою чекбоксів.
 * 3. Збереження налаштувань в сторадж.
 * 4. Збереження тепершньго слова в сторадж.
 * 5. Видалення налаштувань зі стораджа коли покидаємо тип слів.
 *  */

const LessonSettings: React.FC = () => {
  return (
    <Container>
      <Title>Settings</Title>
      <Slider title={"Select time for each word"} step={1} min={0} max={15} />
    </Container>
  );
};

export default LessonSettings;
