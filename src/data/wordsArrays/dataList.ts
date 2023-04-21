import { ROUTES, WordsRoutes } from "../../constants/routes";

type dataList = {
  id: string;
  iconSpan: string;
  title: string;
  describe: string;
  settingsRoute: string;
  wordRoute: string;
};

export const DATA_LIST: dataList[] = [
  {
    id: "1_A1",
    iconSpan: "child_care",
    title: "Words A1",
    describe: "Very Easy",
    settingsRoute: ROUTES.dynamic.wordsSettings(WordsRoutes.A1),
    wordRoute: ROUTES.dynamic.wordsCard(WordsRoutes.A1),
  },
  {
    id: "2_A2",
    iconSpan: "face",
    title: "Words A2",
    describe: "Easy",
    settingsRoute: ROUTES.dynamic.wordsSettings(WordsRoutes.A2),
    wordRoute: ROUTES.dynamic.wordsCard(WordsRoutes.A2),
  },
  {
    id: "3_B1",
    iconSpan: "brightness_medium",
    title: "Words B1",
    describe: "Medium",
    settingsRoute: ROUTES.dynamic.wordsSettings(WordsRoutes.B1),
    wordRoute: ROUTES.dynamic.wordsCard(WordsRoutes.B1),
  },
  {
    id: "4_B2",
    iconSpan: "balance",
    title: "Words B2",
    describe: "Hard",
    settingsRoute: ROUTES.dynamic.wordsSettings(WordsRoutes.B2),
    wordRoute: ROUTES.dynamic.wordsCard(WordsRoutes.B2),
  },
  {
    id: "5_C1",
    iconSpan: "smart_toy",
    title: "Words C1",
    describe: "Very Hard",
    settingsRoute: ROUTES.dynamic.wordsSettings(WordsRoutes.C1),
    wordRoute: ROUTES.dynamic.wordsCard(WordsRoutes.C1),
  },
  // {
  //   id: "6_dontUse",
  //   iconSpan: "apartment",
  //   title: "Don`t use",
  //   describe: "Try to explain with rules",
  //   settingsRoute: ROUTES.dynamic.wordsSettings(WordsRoutes.Animals),
  //   wordRoute: ROUTES.dynamic.wordsCard(WordsRoutes.Animals),
  // },
  {
    id: "7_Animals",
    iconSpan: "pets",
    title: "Animals",
    describe: "Not so Easy",
    settingsRoute: ROUTES.dynamic.wordsSettings(WordsRoutes.Animals),
    wordRoute: ROUTES.dynamic.wordsCard(WordsRoutes.Animals),
  },
  {
    id: "8_Food",
    iconSpan: "fastfood",
    title: "Food",
    describe: "Tasty Term",
    settingsRoute: ROUTES.dynamic.wordsSettings(WordsRoutes.Food),
    wordRoute: ROUTES.dynamic.wordsCard(WordsRoutes.Food),
  },
];
