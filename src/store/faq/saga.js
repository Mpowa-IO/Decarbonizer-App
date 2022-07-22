import { Alert } from "react-native";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { getFaqApi } from "../../services/api/faqApi";
import { navigate } from "../../services/navigation/RootNavigation";
import { clearAsyncStorage, getAccessToken } from "../../util/getAsyncStorage";
import { setToken } from "../signIn";
import { getFaqFailure, getFaqSuccess } from "./action";
import { GET_FAQ } from "./actionType";
function* getFaqsGenerator() {
  try {
    const token = yield call(getAccessToken);
    // console.log("token in api", JSON.parse(token));
    const response = yield call(getFaqApi, token);
    console.log("faq response", response);
    if (response.status === 200) {
      yield put(getFaqSuccess(response.data));
    }
  } catch (error) {
    if (error.response) {
      if (error.response.status === 403) {
        Alert.alert("Session Timeout Please Login Again");
        // navigate("SignUp");
        yield put(setToken(null));
        yield call(clearAsyncStorage);
        yield put(getFaqFailure(error.response.data));
      } else {
        Alert.alert("Get Faq", error.response.data.message);
        console.log("error in signup from with api", error.response);
        yield put(getFaqFailure(error.response.data));
      }
    }
    // The client never received a response, and the request was never left
    else {
      console.log("got some other error", error);
      Alert.alert("Get Faq", error.message);
      yield put(getFaqFailure(error.message));
    }
  }
}

export default function* getFaqSaga() {
  yield all([takeLatest(GET_FAQ, getFaqsGenerator)]);
}
