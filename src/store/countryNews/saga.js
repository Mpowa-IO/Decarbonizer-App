import { Alert } from "react-native";
import { all, call, put, take, takeLatest } from "redux-saga/effects";
import { countryNewsApi } from "../../services/api/countryNewsApi";
import { navigate } from "../../services/navigation/RootNavigation";
import { clearAsyncStorage, getAccessToken } from "../../util/getAsyncStorage";
import { setToken } from "../signIn";
import { getCountryNewsFail, getCountryNewsSuccess } from "./action";
import { GET_COUNTRY_NEWS } from "./actionType";

function* newsGenerator(action) {
  console.log("action in enws", action.id);
  try {
    const token = yield call(getAccessToken);
    const response = yield call(countryNewsApi, action.id, token);
    console.log("country news response", response);
    if (response.status === 200) {
      yield put(getCountryNewsSuccess(response.data.news));
    }
  } catch (error) {
    if (error.response) {
      console.log("news error", error.response);
      if (error.response.status === 403) {
        Alert.alert("News", "Session Timeout Please Login Again");
        yield call(clearAsyncStorage);
        // navigate("SignUp");
        yield put(setToken(null));
        yield put(getCountryNewsFail(error.response.data.message));
      } else {
        if (error.response.status === 404) {
          yield put(getCountryNewsFail(error.response.data.message));
        } else {
          Alert.alert("Project Countries News", error?.response?.data?.message);
          yield put(getCountryNewsFail(error.response.data.message));
        }
      }
    } else {
      console.log("country news error", error);
      Alert.alert("Project Countries News", error.message);
    }
  }
}
export default function* countryNewsSaga() {
  yield all([takeLatest(GET_COUNTRY_NEWS, newsGenerator)]);
}
