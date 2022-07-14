import { Alert } from "react-native";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { resetPassWordApi } from "../../services/api/resetPasswordApi";
import { getAccessToken } from "../../util/getAsyncStorage";
import { RESET_PASSWORD } from "./actionType";

function* resetPassWordGenerator(action) {
  try {
    const token = yield call(getAccessToken);
    const response = yield call(resetPassWordApi, token, action.payload);

    console.log("Resset password response", response);
  } catch (error) {
    console.log("error while reset the password", error);
  }
}
export function* resetPassWordSaga() {
  yield all([takeLatest(RESET_PASSWORD, resetPassWordGenerator)]);
}
