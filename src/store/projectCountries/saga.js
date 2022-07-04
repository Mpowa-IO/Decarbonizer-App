import { Alert } from "react-native";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { countriesProjectApi } from "../../services/api/countriesProjectApi";
import { getAccessToken } from "../../util/getAsyncStorage";
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
      console.log("projects countries error response", error);
      Alert.alert("Project Countries", error?.response?.data?.message);
      yield put(getPorjectCountriesFailure(error?.response?.data?.message));
    }
    if (error.request) {
      console.log("project countries request error", error.request);
      Alert.alert("Project Countries", error.response?.data?.message);
      yield put(getPorjectCountriesFailure(error?.request?.data?.message));
    } else {
      console.log("got some other error in get country", error);
    }
  }
}

export default function* projectCountriesSaga() {
  yield all([takeLatest(GET_PROJECT_COUNTRIES, projectGenerator)]);
}
