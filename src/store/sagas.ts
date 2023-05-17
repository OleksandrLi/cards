import { all, spawn } from "redux-saga/effects";
import word from "../features/word/redux/saga";

function* sagas() {
  yield all([spawn(word)]);
}

export default sagas;
