import { Alert } from "react-native";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { dahsboardApi } from "../../services/api/dashBoardApi";
import { getAccessToken } from "../../util/getAsyncStorage";
import { getDashBoardFailure, getDashBoardSuccess } from "./action";
import { GET_DASHBOARD } from "./actionType";

function* dashBoardGenerator() {
  try {
    const token = yield call(getAccessToken);
    const response = yield call(dahsboardApi, token);
    if (response.status === 200) {
      yield put(getDashBoardSuccess(response.data));
    }
    console.log("dashborad", response);
  } catch (error) {
    console.log("errr in getting dahsboard", error);
    if (error.response) {
      Alert.alert("DashBoard", error.response.data.message);
      yield put(getDashBoardFailure(error.response.data.message));
    }
    if (error.request) {
      Alert.alert("DashBoard", error?.request?.data?.message);
      yield put(getDashBoardFailure(error.request.data.message));
    } else {
    }
  }
}

export default function* dashBoardSaga() {
  yield all([takeLatest(GET_DASHBOARD, dashBoardGenerator)]);
}
