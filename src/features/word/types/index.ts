import { WordsRoutes } from "../../../constants/routes";

export type Game = {
  gameId: string;
  players: string[];
  duration: number;
  typeWords: WordsRoutes;
};

export type CreateGameRequest = {
  playerName: string;
  duration: number;
  typeWords: string;
};

export type JoinToGameRequest = {
  gameId: string;
  playerName: string;
};

export type WordState = {
  isLoading: boolean;
  error: unknown | Error;
  gameId: null | string;
  players: null | string[];
  duration: null | number;
  typeWords: null | WordsRoutes;
};
