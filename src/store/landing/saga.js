import { Alert } from "react-native";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { landingApi } from "../../services/api/landingApi";
import { getAccessToken } from "../../util/getAsyncStorage";
import { GET_LANDING_DATA } from "./actionType";

function* landingGenerator() {
  try {
    const token = yield call(getAccessToken);
    const response = yield call(landingApi, token);
    console.log("landing scren api ", response);
  } catch (error) {
    if (error.response) {
      console.log("eror from api in landig data", error);
    } else {
      console.log("got some othe error", error);
    }
  }
}

export default function* landingSaga() {
  yield all([takeLatest(GET_LANDING_DATA, landingGenerator)]);
}
