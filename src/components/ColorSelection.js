import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { height } from "../services/dimensions";
import Container from "./container";

export default function ColorSelection() {
  return (
    <View
      style={{
        backgroundColor: "#181818",
        height: height * 0.08,
        justifyContent: "center",
      }}
    >
      <Container style={{ marginLeft: 10, marginRight: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{ height: 7, width: 26, backgroundColor: "#8FA133" }}
              />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontFamily: "Alata-Regular", color: "#fff" }}>
                  Monthly
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 20,
              }}
            >
              <View
                style={{ height: 7, width: 26, backgroundColor: "#FFC53F" }}
              />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontFamily: "Alata-Regular", color: "#fff" }}>
                  Cumulative
                </Text>
              </View>
            </View>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={{ color: "#fff", fontFamily: "Alata-Regular" }}>
                Interactive chart 〉
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    </View>
  );
}
