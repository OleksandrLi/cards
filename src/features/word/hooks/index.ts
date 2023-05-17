import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../../store";
import { createRoomRequest } from "../redux/actions";
import { CreateGameRequest } from "../types";

export default function useWord() {
  const dispatch = useDispatch();

  const wordState = useSelector(({ word }: StoreState) => word);

  const onCreateRoom = useCallback(
    (game: CreateGameRequest, cb?: (id: string) => void) => {
      dispatch(createRoomRequest(game, cb));
    },
    [dispatch]
  );

  return {
    ...wordState,
    onCreateRoom,
  };
}
