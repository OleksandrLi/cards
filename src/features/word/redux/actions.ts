import { CreateGameRequest, Game } from "../types";
import * as types from "./types";

export const createRoomRequest = (
  { playerName, duration, typeWords }: CreateGameRequest,
  cb?: (id: string) => void
) => ({
  type: types.CREATE_ROOM_REQUEST,
  payload: { playerName, duration, typeWords, cb },
});

export const createRoomSuccess = ({
  gameId,
  players,
  duration,
  typeWords,
}: Game) => ({
  type: types.CREATE_ROOM_SUCCESS,
  payload: { gameId, players, duration, typeWords },
});

export const createRoomFailed = (error: Error) => ({
  type: types.CREATE_ROOM_FAILED,
  payload: { error },
});

export type WordActions = ReturnType<
  typeof createRoomRequest | typeof createRoomSuccess | typeof createRoomFailed
>;
