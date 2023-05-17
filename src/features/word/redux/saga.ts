import _noop from "lodash/fp/noop";
import { call, put, SagaReturnType, takeLatest } from "redux-saga/effects";
import { createGameApi } from "../api";
import * as actions from "./actions";
import * as lessonsTypes from "./types";

function* createRoom(action: ReturnType<typeof actions.createRoomRequest>) {
  try {
    const { playerName, duration, typeWords, cb = _noop } = action.payload;
    const { data }: SagaReturnType<typeof createGameApi> = yield call(
      createGameApi,
      { playerName, duration, typeWords }
    );
    yield put(actions.createRoomSuccess(data));
    cb(data.gameId);
  } catch (error) {
    yield put(actions.createRoomFailed(error as Error));
  }
}

function* lessonsSaga() {
  yield takeLatest(lessonsTypes.CREATE_ROOM_REQUEST, createRoom);
}

export default lessonsSaga;
