import { all, call, put, takeLatest } from "redux-saga/effects";
import { signupApi } from "../../services";
import { POST_SIGN_UP } from "./actionTypes";

function* SignUp(action) {
  console.log("payload in data in saga", action.payload);

  try {
    const payload = {
      email: action.payload.email,
      email2: action.payload.verifyEmail,
      password: action.payload.password,
      first_name: action.payload.firstName,
      last_name: action.payload.lastName,
      company_or_organisation_name: action.payload.comapnyName,
      location: action.payload.location,
      industry_or_category: action.payload.industry_category,
      number_of_employees: action.payload.company_size.size,
      in_my_role: action.payload.in_role,
    };
    const response = yield call(signupApi, payload);
    console.log("respoinse ", response);
    console.log("inside the saga funt");
  } catch (error) {
    console.log(error);
  }
}

function* SignUpSaga() {
  yield all([takeLatest(POST_SIGN_UP, SignUp)]);
}

export default SignUpSaga;
