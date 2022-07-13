import { Alert } from "react-native";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { singlePlaceApi } from "../../services/api/singleProjct";
import { navigate } from "../../services/navigation/RootNavigation";
import { getAccessToken } from "../../util/getAsyncStorage";
import { setToken } from "../signIn";
import { getSingleProjectFailure, getSingleProjectSuccess } from "./action";
import { GET_SINGLE_PROJECT } from "./actionType";

function* singleProjectGenerator(action) {
  console.log("actiom in single project", action);
  try {
    const token = yield call(getAccessToken);

    const response = yield call(singlePlaceApi, action.payload, token);
    console.log("single project response", response);

    if (response.status === 200) {
      yield put(getSingleProjectSuccess(response.data.project_data));
    }
  } catch (error) {
    if (error.response) {
      if (error.response.status === 403) {
        Alert.alert("Session Timeout Please Login Again");
        yield put(setToken(null));
        // navigate("SignUp");
        yield put(getSingleProjectFailure(error.response.data.message));
      } else {
        Alert.alert("Project Details", error?.response?.data?.message);
        yield put(getSingleProjectFailure(error.response.data.message));
        console.log("api error", error);
      }
    } else {
      Alert.alert("Project Details", error?.message);
      console.log("got some other error", error);
    }
  }
}

export default function* singleProjectsaga() {
  yield all([takeLatest(GET_SINGLE_PROJECT, singleProjectGenerator)]);
}
