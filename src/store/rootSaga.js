import { all, fork } from "redux-saga/effects";
import { getFaqSaga } from "./faq";
import howItWorkSaga from "./howItWork/saga";
import { missionSaga } from "./missionContent";
import signInSaga from "./signIn/saga";
import SignUpSaga from "./signup/saga";

export function* rootSaga() {
  yield all([fork(SignUpSaga)]);
  yield all([fork(signInSaga)]);
  yield all([fork(getFaqSaga)]);
  yield all([fork(howItWorkSaga)]);
  yield all([fork(missionSaga)]);
}
