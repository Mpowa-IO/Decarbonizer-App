import { Alert } from "react-native";
import { strings } from "../../components/strings";
import { checkNetworkConnction } from "../checkNetwork";
import { getAPIFunction } from "./commonAPI/getApiFunction";

export const singlePlaceApi = async (id, token) => {
  const connectionStatus = await checkNetworkConnction();
  if (connectionStatus) {
    const api = `page/project/${id}`;
    return getAPIFunction(api, token).then((res) => res);
  } else {
    Alert.alert(strings.InternetIssue, strings.ReconnectToTheNetwork);
  }
};
