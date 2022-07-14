import { Alert } from "react-native";
import { REACT_APP_BASE_URL } from "../../../env";
import { strings } from "../../components/strings";
import { checkNetworkConnction } from "../checkNetwork";
import axios from "axios";
export const forGotPassWordApi = async (data) => {
  console.log("inside the forgot pass data", data);
  const checkNetwork = await checkNetworkConnction();

  console.log("checkNetwork", checkNetwork);

  if (checkNetwork === true) {
    return axios
      .post(`${REACT_APP_BASE_URL}/auth/credentials/forgotPassword`, data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authkey: "ac56a8d2ca1fa26b",
        },
      })
      .then((res) => {
        return res;
      });
  } else {
    console.log("inside the else ntwk erro");
    Alert.alert(strings.InternetIssue, strings.ReconnectToTheNetwork);
    return;
  }
};
