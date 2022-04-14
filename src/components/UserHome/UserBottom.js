import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Images from "../../assets/images";
import { height, width } from "../../services/dimensions";

export default function UserBottom() {
  return (
    <View>
      <View style={{ flexDirection: "row", height: height * 0.2 }}>
        <View style={{ width: width * 0.5, backgroundColor: "#2E2E2E" }}>
          <Text
            style={{
              fontSize: 48,
              color: "#A8C634",
              fontFamily: "Alata-Regular",
              paddingLeft: 20,
            }}
          >
            340
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Alata-Regular",
              color: "#fff",
              paddingLeft: 20,
            }}
          >
            Users with devices
          </Text>
        </View>
        <TouchableOpacity>
          <View
            style={{
              width: width * 0.5,
              backgroundColor: "#181818",
              flexDirection: "row",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Text
              style={{
                fontSize: 64,
                color: "#fff",
                fontFamily: "Alata-Regular",
                paddingLeft: 20,
              }}
            >
              +
            </Text>
            <Text
              style={{
                fontSize: 24,
                fontFamily: "Alata-Regular",
                color: "#fff",
                paddingLeft: 20,
                width: width * 0.3,
              }}
            >
              Add a user
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", height: height * 0.2 }}>
        <View
          style={{
            width: width * 0.5,
            backgroundColor: "#000000",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View>
            <Image source={Images.EYE_USER} />
          </View>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Alata-Regular",
              color: "#fff",
              paddingLeft: 20,
              width: width * 0.3,
            }}
          >
            Browse Projects
          </Text>
        </View>
        <TouchableOpacity>
          <View
            style={{
              width: width * 0.5,
              backgroundColor: "#2E2E2E",
              flexDirection: "row",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Text
              style={{
                fontSize: 64,
                color: "#fff",
                fontFamily: "Alata-Regular",
                paddingLeft: 20,
              }}
            >
              +
            </Text>
            <Text
              style={{
                fontSize: 24,
                fontFamily: "Alata-Regular",
                color: "#fff",
                paddingLeft: 20,
                width: width * 0.3,
              }}
            >
              Add a project
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
