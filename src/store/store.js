import { configureStore } from "@reduxjs/toolkit";

import createSagaMiddleware from "redux-saga";
import { createAccountReducer } from "./createAccount/reducer";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
  reducer: {
    account: createAccountReducer,
  },
});
sagaMiddleware.run(rootSaga);

export default store;
