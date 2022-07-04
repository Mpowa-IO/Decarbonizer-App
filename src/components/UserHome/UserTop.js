import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Alert,
} from "react-native";
import Images from "../../assets/images";
import { height, width } from "../../services/dimensions";
import { checkNetworkConnction } from "../CheckNetWork";

const UserTop = () => {
  return (
    <View>
      <View
        style={{
          height: height * 0.35,
          position: "relative",
          // backgroundColor: "red",
        }}
      >
        <View>
          <Image source={Images.USER_ACC_IMG} style={{ height: "100%" }} />
        </View>
        <View style={{ position: "absolute", top: 0 }}>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                width: width * 0.6,
                backgroundColor: "rgba(0, 0, 0, 0.69)",
                paddingLeft: width * 0.05,
                paddingTop: height * 0.02,
                height: height * 0.08,
              }}
            >
              <Text>
                <Text
                  style={{
                    color: "#fff",
                    textTransform: "uppercase",
                    fontFamily: "Alata-Regular",
                    fontSize: 24,
                  }}
                >
                  Hero ADMin
                </Text>
              </Text>
            </View>
            <View style={{ width: width * 0.4 }}>
              <Image
                source={Images.PROFILE_DASHBOARD}
                style={{ width: "100%" }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.69)",
            height: height * 0.112,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            position: "absolute",
            bottom: 0,
          }}
        >
          <View
            style={{
              width: width * 0.6,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View>
              <Image source={Images.SOUTH_AFRICA} />
            </View>
            <View>
              <Text
                style={{
                  color: "#fff",
                  fontFamily: "Alata-Regular",
                  fontSize: 20,
                  marginLeft: width * 0.06,
                }}
              >
                South Africa
              </Text>
            </View>
          </View>
          <View
            style={{
              width: width * 0.4,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                fontFamily: "Alata-Regular",
              }}
            >
              Paschal Mwalabu
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserTop;

const styles = StyleSheet.create({});
