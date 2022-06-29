import { Alert } from "react-native";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { getFaqApi } from "../../services/api/faqApi";
import { getAccessToken } from "../../util/getAsyncStorage";
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
      Alert.alert("Get Faq", error.response.data.message);
      console.log("error in signup from with api", error.response);
      yield put(getFaqFailure(error.response.data));
    }
    // The client never received a response, and the request was never left
    else if (error.request) {
      console.log("errro  in signup request", error.request);
      Alert.alert("Get Faq", error?.request?.data?.message);
      yield put(getFaqFailure(error.request.data));
    } else {
      console.log("got some other error", error);
      yield put(getFaqFailure(error.message));
    }
  }
}

export default function* getFaqSaga() {
  yield all([takeLatest(GET_FAQ, getFaqsGenerator)]);
}
