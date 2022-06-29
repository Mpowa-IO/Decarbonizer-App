import { configureStore } from "@reduxjs/toolkit";

import createSagaMiddleware from "redux-saga";
import { createAccountReducer } from "./createAccount/reducer";
import { faqReducer } from "./faq";
import howItWorkReducer from "./howItWork/reducer";
import { missionContent } from "./missionContent";
import { rootSaga } from "./rootSaga";
import { signInReducer } from "./signIn";
import { signupReducer } from "./signup/reducer";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
  reducer: {
    account: createAccountReducer,
    signupReducer,
    signInReducer,
    faqReducer,
    howItWorkReducer,
    missionContent,
  },
});
sagaMiddleware.run(rootSaga);

export default store;
