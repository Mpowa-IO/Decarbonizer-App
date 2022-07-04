import React from "react";
import { View, Text, TextInput } from "react-native";
import { height } from "../../services/dimensions";

export default function UserText(props) {
  const { Label, keyboardType } = props;
  return (
    <View>
      <View>
        <Text
          style={{
            color: "#FFFFFF",
            fontFamily: "Alata-Regular",
            fontSize: 18,
          }}
        >
          {Label}
        </Text>
      </View>
      <View>
        <TextInput
          style={{
            backgroundColor: "#253858",
            marginTop: 10,
            color: "#fff",
            fontFamily: "Alata-Regular",
            paddingLeft: 15,
            height: height * 0.05,
          }}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
}
