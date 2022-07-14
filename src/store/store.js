import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { countryNewsReducer } from "./countryNews";
import { createAccountReducer } from "./createAccount/reducer";
import { dashBoardReducer } from "./dashboard";
import { faqReducer } from "./faq";
import { forGotpassWordState } from "./forgotPassword";
import howItWorkReducer from "./howItWork/reducer";
import { landingReducer } from "./landing";
import { missionContent } from "./missionContent";
import { projectReucer } from "./projectCountries";
import { resetPasswordReducer } from "./resetPassWord";
import { rootSaga } from "./rootSaga";
import { signInReducer } from "./signIn";
import { signupReducer } from "./signup/reducer";
import { singleProject } from "./singleProject";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
  reducer: {
    account: createAccountReducer,
    signupReducer,
    signInReducer,
    faqReducer,
    howItWorkReducer,
    missionContent,
    dashBoardReducer,
    projectReucer,
    singleProject,
    landingReducer,
    countryNewsReducer,
    forGotpassWordState,
    resetPasswordReducer,
  },
});
sagaMiddleware.run(rootSaga);

export default store;
