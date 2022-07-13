import { Alert } from "react-native";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { howItWorkApi } from "../../services/api/howItWorkApi";
import { navigate } from "../../services/navigation/RootNavigation";
import { getAccessToken } from "../../util/getAsyncStorage";
import { setToken } from "../signIn";
import { getHowItWrokFailuire, getHowItWrokSuccess } from "./action";
import { GET_HOW_IT_WORK } from "./actionType";

function* howItWokrGenerator() {
  try {
    const token = yield call(getAccessToken);
    const response = yield call(howItWorkApi, token);
    console.log("response from how it work", response);

    if (response.status === 200) {
      yield put(getHowItWrokSuccess(response.data));
    }
  } catch (error) {
    if (error.response) {
      if (error.response.status === 403) {
        Alert.alert("Session Timeout Please Login Again");
        // navigate("SignUp");
        yield put(setToken(null));
        yield put(getHowItWrokFailuire(error.response.data));
      } else {
        Alert.alert(error.response.data.message);
        console.log("error in signup from with api", error.response);
        yield put(getHowItWrokFailuire(error.response.data));
      }
    }
    // The client never received a response, and the request was never left
    else {
      Alert.alert(error.message);
    }
  }
}

export default function* howItWorkSaga() {
  yield all([takeLatest(GET_HOW_IT_WORK, howItWokrGenerator)]);
}
