import {
  RESET_STATE,
  SET_ACCOUNT_DETAILS,
  SET_CARBON,
  SET_COMPANY_DETAILS,
  SET_COMPANY_SIZE,
  SET_EMAIL,
  SET_NAMES,
} from "./actionTypes";

const intialState = {
  initial_email: "",
  email: "",
  verifyEmail: "",
  password: "",
  firstName: "",
  lastName: "",
  comapnyName: "",
  location: null,
  industry_category: null,
  company_size: "",
  in_role: "",
};

export const createAccountReducer = (state = intialState, action) => {
  console.log("in reducer action.payload", action.payload);
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...state,
        initial_email: action.payload,
      };
    case SET_ACCOUNT_DETAILS:
      return {
        ...state,
        email: action.payload.email,
        verifyEmail: action.payload.verifyEmail,
        password: action.payload.password,
      };

    case SET_NAMES:
      console.log("in reducer action  for set the names", action.payload);

      return {
        ...state,
        firstName: action.payload.first_name,
        lastName: action.payload.last_name,
      };

    case SET_COMPANY_DETAILS:
      return {
        ...state,
        comapnyName: action.payload.companyname,
        location: action.payload.location,
        industry_category: action.payload.selectedIndustry,
      };

    case SET_COMPANY_SIZE:
      return {
        ...state,
        company_size: action.payload,
      };

    case SET_CARBON:
      return {
        ...state,
        in_role: action.payload,
      };

    case RESET_STATE:
      console.log("reseting the state");
      return {
        ...state,
        initial_email: "",
        email: "",
        verifyEmail: "",
        password: "",
        firstName: "",
        lastName: "",
        comapnyName: "",
        location: "",
        industry_category: "",
        company_size: "",
        in_role: "",
      };

    default:
      return state;
  }
};
