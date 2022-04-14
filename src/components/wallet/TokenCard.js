import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import LinearGradient from "react-native-linear-gradient";
import Images from "../../assets/images";
import { height, width } from "../../services/dimensions";
import Plus from "../../assets/Plus.svg";

export default function TokenCard({ navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
        marginTop: height * 0.1,
      }}
    >
      <View style={{ width: width * 0.4 }}>
        <Text
          style={{
            fontSize: 36,
            color: "#fff",
            fontFamily: "Abel-Regular",
            paddingLeft: 30,
          }}
        >
          Tokens
        </Text>
      </View>
      <View style={{ width: width * 0.6 }}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          //   end={{ x: 1, y: 0 }}
          colors={["#1B1B1B", "#323232"]}
          style={{ borderTopLeftRadius: 30, borderBottomLeftRadius: 30 }}
        >
          <View
            style={{
              height: height * 0.2,
              justifyContent: "center",
            }}
          >
            <View
              style={{
                alignItems: "flex-end",
                paddingRight: 10,
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("PurchaseTokens")}
              >
                <Text style={{ color: "#fff", fontSize: 20 }}>
                  <Plus />
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginBottom: 10,
                flexDirection: "row",
                width: width * 0.5,
                marginLeft: 40,
              }}
            >
              <View>
                <Image source={Images.TOKEN_BIG} />
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    fontSize: 36,
                    fontFamily: "Abel-Regular",
                    color: "#fff",
                  }}
                >
                  340
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}
