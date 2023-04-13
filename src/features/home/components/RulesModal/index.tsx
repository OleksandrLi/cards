import React from "react";
import { ListOfRules, RulesContainer, Title } from "./styles";

const RulesModal = () => {
  return (
    <RulesContainer>
      <Title>Правила гри</Title>
      <ListOfRules>
        <li>Гра схожа на Elias.</li>
        <li>Оберіть рівень.</li>
        <li>
          Перед вами картка зі словом англійською та його переклад українською.
          Транскрипцію додано для зручності.
        </li>
        <li>
          Поясніть своє слово іншим гравцям англійською мовою, не використовуючи
          це слово або його частини.
        </li>
        <li>Інші гравці мають відгадати це слово також англійською.</li>
        <li>Гарної гри та навчання!</li>
      </ListOfRules>
    </RulesContainer>
  );
};

export default RulesModal;
