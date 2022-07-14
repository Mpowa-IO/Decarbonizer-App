import { Alert } from "react-native";
import { strings } from "../../components/strings";
import { checkNetworkConnction } from "../checkNetwork";
import { postAPIFunction } from "./commonAPI/postApiFunction";

export const resetPassWordApi = (token, password) => {
  const isConnection = checkNetworkConnction();
  if (isConnection) {
    const API = "/auth/credentials/resetForgotPassword";
    return postAPIFunction(API, token, password).then((res) => res);
  } else {
    Alert.alert(strings.InternetIssue, strings.ReconnectToTheNetwork);
    return;
  }
};
