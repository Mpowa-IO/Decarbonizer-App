import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { width, height } from "../services/dimensions";
import Images from "../assets/images";

export default function PaymentConfirm({ navigation }) {
  return (
    <View>
      <View>
        <Text
          style={{
            color: "#fff",
            fontSize: 24,
            fontFamily: "Alata-Regular",
            textAlign: "center",
          }}
        >
          Payment Processed
        </Text>
      </View>
      <View style={{ marginTop: height * 0.05 }}>
        <Text
          style={{
            color: "#348DCF",
            fontSize: 48,
            fontFamily: "Alata-Regular",
            textAlign: "center",
          }}
        >
          $250
        </Text>
      </View>
      <View
        style={{ marginLeft: 15, marginRight: 15, marginTop: height * 0.05 }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 24,
            fontFamily: "Alata-Regular",
            textAlign: "center",
          }}
        >
          has been added to your wallet
        </Text>
      </View>
      <View style={{ marginTop: height * 0.05 }}>
        <ImageBackground source={Images.BUTTON_BG}>
          <TouchableOpacity
            style={{
              height: height * 0.1,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
            }}
            onPress={() => navigation.navigate("PurchaseTokens")}
          >
            <Text
              style={{
                color: "#A8C634",
                fontFamily: "Alata-Regular",
                fontSize: 20,
                marginTop: -10,
              }}
            >
              Purchase Tokens
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
