import { all, fork } from "redux-saga/effects";
import { countryNewsSaga } from "./countryNews";
import { dashBoardSaga } from "./dashboard";
import { getFaqSaga } from "./faq";
import { forgotPassWordSaga } from "./forgotPassword";
import howItWorkSaga from "./howItWork/saga";
import { landingSaga } from "./landing";
import { missionSaga } from "./missionContent";
import { projectCountriesSaga } from "./projectCountries";
import { resetPassWordSaga } from "./resetPassWord";
import signInSaga from "./signIn/saga";
import SignUpSaga from "./signup/saga";
import { singleProjectsaga } from "./singleProject";

export function* rootSaga() {
  yield all([fork(SignUpSaga)]);
  yield all([fork(signInSaga)]);
  yield all([fork(getFaqSaga)]);
  yield all([fork(howItWorkSaga)]);
  yield all([fork(missionSaga)]);
  yield all([fork(dashBoardSaga)]);
  yield all([fork(projectCountriesSaga)]);
  yield all([fork(singleProjectsaga)]);
  yield all([fork(landingSaga)]);
  yield all([fork(countryNewsSaga)]);
  yield all([fork(forgotPassWordSaga)]);
  yield all([fork(resetPassWordSaga)]);
}
