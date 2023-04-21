import React, { useState } from "react";
import Slider from "../../shared/slider";
import { NavigationTitle as Title } from "../home/components/HomeTitle/styles";
import LinkButton from "./components/LinkButton";
import { Container } from "./styles";

/*
 * TODO:
 * 2. Вибір налаштувань за допомогою чекбоксів.
 * 3. Збереження налаштувань в сторадж.
 * 5. Видалення налаштувань зі стораджа коли покидаємо тип слів.
 *  */

const LessonSettings: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  return (
    <Container>
      <Title>Settings</Title>
      <Slider
        value={value}
        setValue={setValue}
        title={"Select time for each word"}
        step={1}
        min={0}
        max={15}
      />
      <LinkButton value={value} />
    </Container>
  );
};

export default LessonSettings;
