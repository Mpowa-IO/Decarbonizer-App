import { all, fork } from "redux-saga/effects";
import SignUpSaga from "./signup/saga";

export function* rootSaga() {
  yield all([fork(SignUpSaga)]);
}
