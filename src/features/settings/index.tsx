import React from "react";
import { NavigationTitle as Title } from "../home/components/HomeTitle/styles";
import { HomeContainer as Container } from "../home/styles";

/*
 * TODO:
 * 2. Вибір налаштувань за допомогою чекбоксів.
 * 3. Збереження налаштувань в сторадж.
 * 4. Збереження тепершньго слова в сторадж.
 * 5. Видалення налаштувань зі стораджа коли покидаємо тип слів.
 * 8. Додати в резюме графкьель.
 *  */

const LessonSettings: React.FC = () => {
  return (
    <Container>
      <Title>Select settings</Title>
    </Container>
  );
};

export default LessonSettings;
