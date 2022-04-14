import { View, Text } from "react-native";
import React from "react";
import Logo from "../components/Logo";
import PaymentConfirm from "../components/PaymentConfirm";
import { height } from "../services/dimensions";

const PaymentProcced = (props) => {
  const { navigation } = props;
  return (
    <View style={{ flex: 1, backgroundColor: "#181818" }}>
      <View>
        <Logo isArrow {...props} />
      </View>
      <View
        style={{
          height: height * 0.82,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PaymentConfirm {...props} />
      </View>
    </View>
  );
};

export default PaymentProcced;
