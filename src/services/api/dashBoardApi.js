import { Alert } from "react-native";
import { strings } from "../../components/strings";
import { checkNetworkConnction } from "../checkNetwork";
import { getAPIFunction } from "./commonAPI/getApiFunction";

export const dahsboardApi = async (token) => {
  const connectionStatus = await checkNetworkConnction();
  if (connectionStatus) {
    const api = "page/dashboard";
    return getAPIFunction(api, token).then((res) => res);
  } else {
    Alert.alert(strings.InternetIssue, strings.ReconnectToTheNetwork);
  }
};
