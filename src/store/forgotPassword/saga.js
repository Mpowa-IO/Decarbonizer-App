import { Alert } from "react-native";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { forGotPassWordApi } from "../../services/api/forgotPassWord";
import { forGotPasswordFailUre, forGotPasswordSuccess } from "./action";
import { FORGOT_PASSWORD_START } from "./actionType";
function* forgotPassWord(action) {
  console.log("insode the saga forgot password", action);
  try {
    const response = yield call(forGotPassWordApi, action.payload);

    if (response?.status === 200) {
      yield put(forGotPasswordSuccess(response.data.message));
    }
    console.log("forgot password response", response);

    // const response =  yield call()
  } catch (error) {
    yield put(forGotPasswordFailUre(error.message));
    console.log("error in forgot pwd", error);
    if (error.message === "Network Error") {
      Alert.alert("Forgot Password", error.message);
      yield put(forGotPasswordFailUre(error.message));
      return;
    }
    console.log("error in signin", error);
    // The client was given an error response (5xx, 4xx)
    if (error.response) {
      Alert.alert("Forgot Password", error.response.data.message);
      yield put(forGotPasswordFailUre(error.response.data));
      return;
    } else {
      console.log("got some other error", error.message);
      Alert.alert("Forgot Password", error.message);
      yield put(forGotPasswordFailUre(error.message));
    }
  }
}

export function* forgotPassWordSaga() {
  yield all([takeLatest(FORGOT_PASSWORD_START, forgotPassWord)]);
}
