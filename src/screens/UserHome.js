import { StyleSheet, Text, View, Alert, ScrollView } from "react-native";
import React from "react";
import Logo from "../components/Logo";
import UserTop from "../components/UserHome/UserTop";
import UserBottom from "../components/UserHome/UserBottom";
import { height } from "../services/dimensions";
import { checkNetworkConnction } from "../services/checkNetwork";
import { ApiCall } from "../services";
// import { APIS } from "../../env";

const UserHome = () => {
  const [getUserloader, setGetUserLoader] = React.useState(false);

  const getHero = async () => {
    // setGetUserLoader(true);
    // const network = await checkNetworkConnction();
    // if (network) {
    //   ApiCall({ URL: APIS.PROJECT, requestType: "get" }).then((response) => {
    //     if (response.status === 200) {
    //       setGetUserLoader(false);
    //       console.log("response get succesffuly", response);
    //     } else {
    //       setGetUserLoader(false);
    //       Alert.alert("Some Thing Went Wrong");
    //     }
    //   });
    // } else {
    //   setGetUserLoader(false);
    //   Alert.alert("Network Error");
    // }
  };
  React.useEffect(() => {
    // getHero();
  }, []);

  return (
    <View style={{ backgroundColor: "#181818", flex: 1 }}>
      <View>
        <Logo />
      </View>
      <ScrollView>
        <View>
          <UserTop />
        </View>
        <View>
          <UserBottom />
        </View>
        <View style={{ paddingBottom: 50 }} />
      </ScrollView>
    </View>
  );
};

export default UserHome;

const styles = StyleSheet.create({});
