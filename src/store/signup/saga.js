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
      email: action.payload.email.trim(),
      password: action.payload.password.trim(),
      first_name: action.payload.first_name.trim(),
      last_name: action.payload.last_name.trim(),
    };

    console.log("Signup payload", payload);

    const response = yield call(signupApi, payload);
    console.log("response singup", response);
    if (response.status === 201 || 200) {
      yield put(postSignupSuccess(response.data));
    }
    action.callBack && action.callBack(response.data);
  } catch (error) {
    if (error.message === "Network Error") {
      Alert.alert("SignUp Failed", error.message);
      yield put(postSignupFailure(error.message));
      return;
    }
    // The client was given an error response (5xx, 4xx)
    if (error.response) {
      if (error.response.data.error) {
        Alert.alert(strings.SignUpFailed, error?.response?.data?.error.message);
        yield put(postSignupFailure(error?.response?.data));
      } else {
        Alert.alert(strings.SignUpFailed, error?.response?.data?.message);
        yield put(postSignupFailure(error?.response?.data));
        console.log("error in signup from api", error.response);
      }
    }
    // if (error.request) {
    //   Alert.alert(strings.SignUpFailed, "Some Thing Went Wrong");
    //   yield put(postSignupFailure("Some Thing Went Wrong"));
    //   console.log("error occur in error request", error.request);
    // }
    // The client never received a response, and the request was never left
    else {
      Alert.alert(strings.SignUpFailed, error.message);
      console.log("got some other error", error.message);
      yield put(postSignupFailure(error?.response?.data));
    }
  }
}

function* SignUpSaga() {
  yield all([takeLatest(POST_SIGN_UP, SignUp)]);
}

export default SignUpSaga;
