import { AxiosPromise } from "axios";
import { api } from "../../../api";
import { CreateGameRequest, Game, JoinToGameRequest } from "../types";

export const getGameApi = (id: string): AxiosPromise<Game> => {
  return api.get(`/games/${id}`);
};

export const createGameApi = (game: CreateGameRequest): AxiosPromise<Game> =>
  api.post(`/games/createGame`, game);

export const joinToGameApi = (game: JoinToGameRequest): AxiosPromise<Game> =>
  api.post(`/games/joinGame`, game);
