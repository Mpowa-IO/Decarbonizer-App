import { Alert } from "react-native";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { howItWorkApi } from "../../services/api/howItWorkApi";
import { getAccessToken } from "../../util/getAsyncStorage";
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
      Alert.alert(error.response.data.message);
      console.log("error in signup from with api", error.response);
      yield put(getHowItWrokFailuire(error.response.data));
    }
    // The client never received a response, and the request was never left
    else if (error.request) {
      console.log(error.request);
      Alert.alert(error?.request?.data?.message);
      yield put(getHowItWrokFailuire(error.request.data));
    } else {
    }
  }
}

export default function* howItWorkSaga() {
  yield all([takeLatest(GET_HOW_IT_WORK, howItWokrGenerator)]);
}
