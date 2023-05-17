import type { Reducer } from "redux";
import { WordState } from "../types";
import { WordActions } from "./actions";
import * as types from "./types";

export const INITIAL_STATE: WordState = {
  isLoading: false,
  error: null,
  gameId: null,
  players: null,
  duration: null,
  typeWords: null,
};

const reducer: Reducer<typeof INITIAL_STATE, WordActions> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case types.CREATE_ROOM_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    }

    case types.CREATE_ROOM_SUCCESS: {
      const { gameId, players, duration, typeWords } = action.payload;

      return {
        ...state,
        gameId: gameId,
        players: players,
        duration: duration,
        typeWords: typeWords,
        isLoading: false,
      };
    }

    case types.CREATE_ROOM_FAILED: {
      const { error } = action.payload;
      return {
        ...state,
        error,
        isLoading: false,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
