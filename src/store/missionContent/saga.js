import { Alert } from "react-native";
import { all, call, takeEvery, put } from "redux-saga/effects";
import { missionContentApi } from "../../services/api/missionContentApi";
import { getAccessToken } from "../../util/getAsyncStorage";
import { getMissionContentFailure, getMissionContetSuccess } from "./action";
import { GET_MISSION_CONTENT } from "./actionType";
function* missionGenerator() {
  try {
    const token = yield call(getAccessToken);
    const response = yield call(missionContentApi, token);

    console.log("mission content response", response);

    if (response.status === 200) {
      yield put(getMissionContetSuccess(response.data));
    }
  } catch (error) {
    if (error.response) {
      Alert.alert("Mission", error.response.data.message);
      console.log("error in signup from with api", error.response);
      yield put(getMissionContentFailure(error.response.data));
    }
    // The client never received a response, and the request was never left
    else if (error.request) {
      console.log("errro  in signup request", error.request);
      Alert.alert("Mission", error?.request?.data?.message);
      yield put(getMissionContentFailure(error.request.data));
    } else {
    }
    console.log("error while get mission", error);
  }
}

export default function* missionSaga() {
  yield all([takeEvery(GET_MISSION_CONTENT, missionGenerator)]);
}
