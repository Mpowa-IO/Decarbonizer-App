import React from "react";
import { View, Text, ScrollView } from "react-native";
import Logo from "../components/Logo";
import NumKey from "../components/wallet/NumKey";

const ConfirmAmount = (props) => {
  const { navigation } = props;
  return (
    <View style={{ flex: 1, backgroundColor: "#181818" }}>
      <View>
        <Logo isArrow={true} {...props} />
      </View>
      <ScrollView>
        <NumKey {...props} />
      </ScrollView>
    </View>
  );
};

export default ConfirmAmount;
