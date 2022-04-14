import React from "react";
import { View, Text, TextInput } from "react-native";

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
          }}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
}
