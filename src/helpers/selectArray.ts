import { WordsRoutes } from "../constants/routes";
import {
  Animals,
  Food,
  WordsA1,
  WordsA2,
  WordsB1,
  WordsB2,
  WordsC1,
  WordsC2,
} from "../data/wordsArrays";

export const selectArray = (type: WordsRoutes) => {
  switch (type) {
    case "A1":
      return WordsA1;
    case "A2":
      return WordsA2;
    case "B1":
      return WordsB1;
    case "B2":
      return WordsB2;
    case "C1":
      return WordsC1;
    case "C2":
      return WordsC2;
    case "Animals":
      return Animals;
    case "Food":
      return Food;
    default:
      return WordsA1;
  }
};
