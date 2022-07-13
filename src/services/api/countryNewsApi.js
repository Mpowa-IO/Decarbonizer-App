import { Alert } from "react-native";
import { strings } from "../../components/strings";
import { checkNetworkConnction } from "../checkNetwork";
import { getAPIFunction } from "./commonAPI/getApiFunction";

export const countryNewsApi = async (id, token) => {
  const connection = await checkNetworkConnction();

  if (connection) {
    const api = `news/country/${id}`;
    return getAPIFunction(api, token).then((res) => res);
  } else {
    Alert.alert(strings.InternetIssue, strings.ReconnectToTheNetwork);
  }
};
