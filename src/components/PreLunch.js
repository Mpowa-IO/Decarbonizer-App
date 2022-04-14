import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import React from "react";
import Images from "../assets/images";
import { height, width } from "../services/dimensions";

export default function PreLunch() {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ position: "relative", width: width * 0.5 }}>
        <View>
          <View>
            <Image source={Images.DASH_ONE} style={{ height: height * 0.5 }} />
          </View>
          <View
            style={{
              position: "absolute",
              top: 0,
              backgroundColor: "rgba(0, 0, 0, 0.7);",
              width: "100%",
              height: "100%",
              padding: 10,
              height: height * 0.25,
            }}
          >
            <View style={{ alignItems: "flex-end" }}>
              <Image source={Images.KEY_PIGGY} />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View>
                <Text
                  style={{
                    color: "#A8C634",
                    fontSize: 72,
                    fontFamily: "Alata-Regular",
                  }}
                >
                  1
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: "#fff",
                    textTransform: "uppercase",
                    fontFamily: "Alata-Regular",
                    fontSize: 16,
                    width: width * 0.3,
                    marginLeft: 20,
                  }}
                >
                  pre-launch projectS you have funded
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              backgroundColor: " rgba(0, 0, 0, 0.58);",
              width: "100%",
              height: "100%",
              padding: 10,
              height: height * 0.25,
            }}
          >
            <View style={{ alignItems: "flex-end" }}>
              <Image source={Images.KEY_PIGGY} />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View>
                <Text
                  style={{
                    color: "#A8C634",
                    fontSize: 72,
                    fontFamily: "Alata-Regular",
                  }}
                >
                  3
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: "#fff",
                    textTransform: "uppercase",
                    fontFamily: "Alata-Regular",
                    fontSize: 16,
                    width: width * 0.3,
                    marginLeft: 20,
                  }}
                >
                  pre-launch projectS you have funded
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{ position: "relative", width: width * 0.5 }}>
        <View>
          <View>
            <Image source={Images.DASH_TWO} style={{ height: height * 0.5 }} />
          </View>
          <View
            style={{
              position: "absolute",
              top: 0,
              backgroundColor: "rgba(0, 0, 0, 0.7);",
              width: "100%",
              height: "100%",
              padding: 10,
              height: height * 0.25,
              justifyContent: "center",
            }}
          >
            <View style={{ alignItems: "center" }}>
              <View>
                <Text
                  style={{
                    color: "#A8C634",
                    fontSize: 48,
                    textTransform: "uppercase",
                    fontFamily: "Alata-Regular",
                  }}
                >
                  87.1tn
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: "#fff",
                    textTransform: "uppercase",
                    fontFamily: "Alata-Regular",
                    fontSize: 12,
                    width: width * 0.45,
                    textAlign: "center",
                  }}
                >
                  YOUR Total Carbon Offset FOR 2021
                </Text>
                <Text
                  style={{
                    color: "#fff",
                    fontFamily: "Alata-Regular",
                    fontSize: 12,
                    textAlign: "center",
                    marginTop: 10,
                  }}
                >
                  More data points 〉
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              backgroundColor: " rgba(0, 0, 0, 0.34);",
              width: "100%",
              height: "100%",
              padding: 10,
              height: height * 0.25,
            }}
          >
            <View style={{ alignItems: "flex-end", padding: 5 }}>
              <Image source={Images.BOOKMARK} />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View>
                <Text
                  style={{
                    color: "#A8C634",
                    fontSize: 72,
                    fontFamily: "Alata-Regular",
                  }}
                >
                  1
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: "#fff",
                    textTransform: "uppercase",
                    fontFamily: "Alata-Regular",
                    fontSize: 16,
                    width: width * 0.3,
                    marginLeft: 20,
                  }}
                >
                  Pre-launCH project on your watchlist
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
