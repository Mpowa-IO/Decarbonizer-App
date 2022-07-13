import { Alert } from "react-native";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { signInApi } from "../../services/api/signInApi";
import { postSignInFailure, postSignInSuccess, setToken } from "./action";
import { POST_SIGN_IN } from "./actionType";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../../services/navigation/RootNavigation";
function* signIn(action) {
  console.log("inside the saga function payload", action);

  try {
    const response = yield call(signInApi, action.payload);
    console.log("sign in response", response.data);

    if (response.status === 200) {
      yield put(postSignInSuccess(response.data));
      const token = JSON.stringify(response.data.access_token);
      yield put(setToken(response.data.access_token));
      console.log("token is", token);
      AsyncStorage.setItem("@AccessToken", response.data.access_token);
      // navigate("BottomTab");
    }
  } catch (error) {
    console.log(" error.message", error.message);

    if (error.message === "Network Error") {
      Alert.alert("Login Failed", error.message);
      yield put(postSignInFailure(error.message));
      return;
    }
    console.log("error in signin", error);
    // The client was given an error response (5xx, 4xx)
    if (error.response) {
      Alert.alert("Login Failed", error.response.data.message);
      console.log("error in signup from with api", error);
      yield put(postSignInFailure(error.response.data));
      return;
    }
    if (error.request) {
      console.log("request error", error.request);
    }
    // The client never received a response, and the request was never left
    else {
      console.log("got some other error", error.message);
      // Alert.alert("Login Failed", error.message);
    }
  }
}

export default function* signInSaga() {
  yield all([takeLatest(POST_SIGN_IN, signIn)]);
}
