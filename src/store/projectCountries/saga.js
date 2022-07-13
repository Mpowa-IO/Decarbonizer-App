import { Alert } from "react-native";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { countriesProjectApi } from "../../services/api/countriesProjectApi";
import { navigate } from "../../services/navigation/RootNavigation";
import { getAccessToken } from "../../util/getAsyncStorage";
import { setToken } from "../signIn";
import {
  getPorjectCountriesFailure,
  getProjectCountriesSuccess,
} from "./action";
import { GET_PROJECT_COUNTRIES } from "./actionType";

function* projectGenerator() {
  try {
    const token = yield call(getAccessToken);
    const response = yield call(countriesProjectApi, token);
    console.log("project countries response", response);

    if (response.status === 200) {
      yield put(getProjectCountriesSuccess(response.data.countries));
    }
  } catch (error) {
    if (error.response) {
      if (error.response.status === 403) {
        Alert.alert("Project Countries", "Session Timeout Please Login Again");
        yield put(setToken(null));
        // navigate("SignUp");
        yield put(getPorjectCountriesFailure(error?.response?.data?.message));
      } else {
        console.log("projects countries error response", error.response.status);
        Alert.alert("Project Countries", error?.response?.data?.message);
        yield put(getPorjectCountriesFailure(error?.response?.data?.message));
      }
    } else {
      Alert.alert("Project Countries", error.message);
      console.log("got some other error in get country", error);
    }
  }
}

export default function* projectCountriesSaga() {
  yield all([takeLatest(GET_PROJECT_COUNTRIES, projectGenerator)]);
}
