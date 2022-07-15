import { Alert } from "react-native";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { signInApi } from "../../services/api/signInApi";
import { postSignInFailure, postSignInSuccess, setToken } from "./action";
import { POST_SIGN_IN } from "./actionType";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../../services/navigation/RootNavigation";
import Toast from "react-native-toast-message";

function* signIn(action) {
  try {
    const response = yield call(signInApi, action.payload);

    action.callBack && action.callBack(response);

    if (response.status === 200) {
      yield put(postSignInSuccess(response.data));
      const token = JSON.stringify(response.data.access_token);
      yield put(setToken(response.data.access_token));

      AsyncStorage.setItem("@AccessToken", response.data.access_token);
      // navigate("BottomTab");
      Toast.show({
        type: "success",
        text1: "successFully Login",
      });
    }
  } catch (error) {
    if (error.message === "Network Error") {
      // Alert.alert('Login Failed', error.message);
      Toast.show({
        type: "error",
        text1: error.message,
      });

      yield put(postSignInFailure(error.message));
      return;
    }

    // The client was given an error response (5xx, 4xx)
    if (error.response) {
      // Alert.alert('Login Failed', error.response.data.message);
      Toast.show({
        type: "error",
        text1: error.response.data.message,
      });

      yield put(postSignInFailure(error.response.data));
      return;
    }
    if (error.request) {
    }
    // The client never received a response, and the request was never left
    else {
      // Alert.alert("Login Failed", error.message);
    }
  }
}

export default function* signInSaga() {
  yield all([takeLatest(POST_SIGN_IN, signIn)]);
}
