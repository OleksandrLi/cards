export const ROUTES = {
  root: "/",
  home: "/words",
  dynamic: {
    wordsSettings: (type: ":type" | WordsRoutes = ":type") =>
      `/words/settings/${type}`,
    wordsCard: (type: ":type" | WordsRoutes = ":type") => `/words/${type}`,
  },
};

export enum WordsRoutes {
  A1 = "A1",
  A2 = "A2",
  B1 = "B1",
  B2 = "B2",
  C1 = "C1",
  Animals = "Animals",
  DontUse = "DontUse",
}
