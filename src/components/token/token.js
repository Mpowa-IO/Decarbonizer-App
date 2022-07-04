import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Images from "../../assets/images";
import LinearGradient from "react-native-linear-gradient";
import { height, width } from "../../services/dimensions";

const token = () => {
  const [number, onChangeNumber] = React.useState(null);
  const [toggle, setToggle] = React.useState(false);

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "space-between",
        // backgroundColor: "red",
        paddingTop: 40,
        paddingBottom: 40,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ marginRight: 20 }}>
          <Text
            style={{
              color: "#FFFFFF",
              fontFamily: "Alata-Regular",
              width: width * 0.2,
              textAlign: "center",
            }}
          >
            Available Token Value
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View>
            <Image source={Images.TOKEN_BIG} />
          </View>
          <Text
            style={{
              color: "#FFFFFF",
              fontFamily: "Alata-Regular",
              marginLeft: 20,
            }}
          >
            340
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
          // backgroundColor: "yellow",
          width: "100%",
          paddingBottom: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text
              style={{
                fontFamily: "Alata-Regular",
                color: "#fff",
                fontSize: 18,
              }}
            >
              Project Fund
            </Text>
            <Text
              style={{
                fontFamily: "Alata-Regular",
                color: "#fff",
                fontSize: 12,
                textAlign: "center",
              }}
            >
              (minimum 150)
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              height: 43,
              borderRadius: 24,
              flexDirection: "row",
              width: width * 0.35,
              marginLeft: 20,
            }}
          >
            <View style={{ marginTop: 5 }}>
              <Image source={Images.COIN_LOGO} />
            </View>
            <View>
              <View>
                <TextInput
                  style={{
                    color: "#000",
                    height: "100%",
                  }}
                  onChangeText={onChangeNumber}
                  value={number}
                  placeholder=""
                  keyboardType="numeric"
                  defaultValue={toggle ? "350" : ""}
                />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            width: width * 0.35,
            marginLeft: width * 0.3,
            marginTop: height * 0.02,
          }}
        >
          {toggle ? null : (
            <TouchableOpacity onPress={() => setToggle(!toggle)}>
              <LinearGradient
                colors={["#1B1B1B", "#323232"]}
                style={{
                  borderRadius: 24,
                  height: height * 0.06,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: "Alata-Regular",
                    color: "#A8C634",
                    textAlign: "center",
                  }}
                >
                  add to fund
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          )}
        </View>
        {toggle && (
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                color: "#fff",
                width: width * 0.7,
                fontSize: 14,
                fontFamily: "Alata-Regular",
                textAlign: "center",
              }}
            >
              Thank you for contributing to this project’s funding. You can
              access your documents from your dashboard.
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default token;

const styles = StyleSheet.create({});
