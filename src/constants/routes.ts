export const ROUTES = {
  root: "/",
  home: "/words",
  dynamic: {
    wordsSettings: (type: ":type") => `/words/settings/${type}`,
    wordsCard: (type: ":type") => `/words/${type}`,
  },
};
