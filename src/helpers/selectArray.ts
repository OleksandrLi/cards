import { WordsRoutes } from "../constants/routes";
import {
  animals,
  wordsA1,
  wordsA2,
  wordsB1,
  wordsB2,
  wordsC1,
} from "../data/wordsArrays";

export const selectArray = (type: WordsRoutes) => {
  switch (type) {
    case "A1":
      return wordsA1;
    case "A2":
      return wordsA2;
    case "B1":
      return wordsB1;
    case "B2":
      return wordsB2;
    case "C1":
      return wordsC1;
    case "Animals":
      return animals;
    default:
      return wordsA1;
  }
};
