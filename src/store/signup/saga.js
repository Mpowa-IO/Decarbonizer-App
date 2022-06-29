import { all, call, put, takeLatest } from "redux-saga/effects";
import { signupApi } from "../../services/api/signupApi";
import { POST_SIGN_UP } from "./actionTypes";
import { Alert } from "react-native";
import { postSignupFailure, postSignupSuccess } from "./action";
import { strings } from "../../components/strings";

function* SignUp(action) {
  console.log("payload in data in saga", action);
  try {
    const payload = {
      email: action.payload.email,
      password: action.payload.password,
      first_name: action.payload.firstName,
      last_name: action.payload.lastName,
    };

    const response = yield call(signupApi, payload);
    if (response.status === 201 || 200) {
      yield put(postSignupSuccess(response.data));
    }
    action.callBack && action.callBack(response.data);
  } catch (error) {
    // The client was given an error response (5xx, 4xx)
    if (error.response) {
      Alert.alert(strings.SignUpFailed, error?.response?.data?.message);
      console.log("error in signup from api", error.response);
      yield put(postSignupFailure(error?.response?.data));
    }
    // The client never received a response, and the request was never left
    else if (error.request) {
      console.log("errro  in signup request", error.request);
      Alert.alert(strings.SignUpFailed, error?.request?.data?.message);
    } else {
      console.log("got some other error", error.message);
    }
  }
}

function* SignUpSaga() {
  yield all([takeLatest(POST_SIGN_UP, SignUp)]);
}

export default SignUpSaga;
