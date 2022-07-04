import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { height } from "../../services/dimensions";

const UserFormDetails = (props) => {
  const { title, style } = props;
  return (
    <View
      style={[
        {
          height: height * 0.1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#323232",
        },
        style,
      ]}
    >
      <Text
        style={{ color: "#FFFFFF", fontFamily: "Alata-Regular", fontSize: 18 }}
      >
        {title}
      </Text>
    </View>
  );
};

export default UserFormDetails;
