import { Alert } from "react-native";
import { strings } from "../../components/strings";
import { checkNetworkConnction } from "../checkNetwork";
import { getAPIFunction } from "./commonAPI/getApiFunction";

export const landingApi = async (token) => {
  const isNetwork = await checkNetworkConnction();

  if (isNetwork) {
    const api = "page/landing";
    return getAPIFunction(api, token).then((res) => res);
  } else {
    Alert.alert(strings.InternetIssue, strings.ReconnectToTheNetwork);
  }
};
