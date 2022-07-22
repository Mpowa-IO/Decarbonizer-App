import { Alert } from "react-native";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { landingApi } from "../../services/api/landingApi";
import { navigate } from "../../services/navigation/RootNavigation";
import { clearAsyncStorage, getAccessToken } from "../../util/getAsyncStorage";
import { setToken } from "../signIn";
import { getLandingDataFail, getLandingDataSuccess } from "./action";
import { GET_LANDING_DATA } from "./actionType";

function* landingGenerator() {
  try {
    const token = yield call(getAccessToken);
    const response = yield call(landingApi, token);
    console.log("landing scren api ", response);
    if (response.status === 200) {
      yield put(getLandingDataSuccess(response.data));
    }
  } catch (error) {
    if (error.message === "Network Error") {
      Alert.alert(error.message);
      yield put(getLandingDataFail(error.message));
      return;
    }
    if (error.response) {
      if (error.response.status === 403) {
        Alert.alert("Session Timeout Please Login Again");
        // navigate("SignUp");
        yield put(setToken(null));
        yield call(clearAsyncStorage);
        yield put(getLandingDataFail(error.response.data));
      } else {
        console.log("eror from api in landig data", error);
        Alert.alert("Landing", error.data.message);
        yield put(getLandingDataFail(error.response.data));
      }
    } else {
      Alert.alert("Landing", error.message);
      console.log("got some othe error", error);
      yield put(getLandingDataFail(error.response.data));
    }
  }
}

export default function* landingSaga() {
  yield all([takeLatest(GET_LANDING_DATA, landingGenerator)]);
}
