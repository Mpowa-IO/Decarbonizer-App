import { Alert } from "react-native";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { signInApi } from "../../services/api/signInApi";
import { postSignInFailure, postSignInSuccess } from "./action";
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
      console.log("token is", token);
      AsyncStorage.setItem("@AccessToken", response.data.access_token);
      navigate("BottomTab");
    }
  } catch (error) {
    // The client was given an error response (5xx, 4xx)
    if (error.response) {
      Alert.alert("Login Failed", error.response.data.message);
      console.log("error in signup from with api", error.response);
      yield put(postSignInFailure(error.response.data));
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

export default function* signInSaga() {
  yield all([takeLatest(POST_SIGN_IN, signIn)]);
}
