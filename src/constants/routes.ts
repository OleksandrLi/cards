export const ROUTES = {
  root: "/",
  home: "/words",
  dynamic: {
    wordsSettings: (type: ":type" | WordsRoutes = ":type") =>
      `/words/settings/${type}`,
    wordsCard: (type: ":type" | WordsRoutes = ":type", gameId = "") =>
      `/words/${type}${gameId ? `?gameId=${gameId}` : ""}`,
  },
};

export enum WordsRoutes {
  A1 = "A1",
  A2 = "A2",
  B1 = "B1",
  B2 = "B2",
  C1 = "C1",
  C2 = "C2",
  Animals = "Animals",
  Food = "Food",
  DontUse = "DontUse",
}
