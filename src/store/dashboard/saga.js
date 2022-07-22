import { Alert } from "react-native";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { dahsboardApi } from "../../services/api/dashBoardApi";
import { navigate } from "../../services/navigation/RootNavigation";
import { clearAsyncStorage, getAccessToken } from "../../util/getAsyncStorage";
import { setToken } from "../signIn";
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
      if (error.response.status === 403) {
        Alert.alert("Session Timeout Please Login Again");
        // navigate("SignUp");
        yield put(setToken(null));
        yield call(clearAsyncStorage);
        yield put(getDashBoardFailure(error.response.data));
      } else {
        Alert.alert("DashBoard", error.response.data.message);
        yield put(getDashBoardFailure(error.response.data.message));
      }
    } else {
      Alert.alert("DashBoard", error.message);
    }
  }
}

export default function* dashBoardSaga() {
  yield all([takeLatest(GET_DASHBOARD, dashBoardGenerator)]);
}
