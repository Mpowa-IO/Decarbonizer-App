import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Images from "../assets/images";
import Container from "../components/container";
import Logo from "../components/Logo";
import { width, height } from "../services/dimensions";

const PaymentMethod = ({ navigation }) => {
  const [text, onChangeText] = React.useState("");
  const [card, setCard] = React.useState("");
  const [date, _date] = React.useState("");
  const [cvc, _cvc] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={{ flex: 1, backgroundColor: "#181818" }}>
      <View>
        <Logo />
      </View>
      <Container isPadding={true}>
        <View
          style={{
            height: height * 0.8,
            justifyContent: "center",
          }}
        >
          <View>
            <View style={{ marginBottom: 5 }}>
              <Text style={{ color: "#fff", fontFamily: "Abel-Regular" }}>
                Name on card
              </Text>
            </View>
            <View>
              <TextInput
                onChangeText={onChangeText}
                value={text}
                style={{
                  color: "#000",
                  backgroundColor: "#FFFFFF",
                  borderRadius: 4,
                }}
              />
            </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <View style={{ marginBottom: 5 }}>
              <Text style={{ color: "#fff", fontFamily: "Abel-Regular" }}>
                Card Number
              </Text>
            </View>
            <View>
              <TextInput
                onChangeText={setCard}
                value={card}
                style={{
                  color: "#000",
                  backgroundColor: "#FFFFFF",
                  borderRadius: 4,
                }}
              />
            </View>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ marginTop: 15, width: width * 0.3 }}>
              <View style={{ marginBottom: 5 }}>
                <Text style={{ color: "#fff", fontFamily: "Abel-Regular" }}>
                  Expiry mm/yy
                </Text>
              </View>
              <View>
                <TextInput
                  onChangeText={_date}
                  value={date}
                  style={{
                    color: "#000",
                    backgroundColor: "#FFFFFF",
                    borderRadius: 4,
                  }}
                />
              </View>
            </View>
            <View style={{ marginTop: 15, width: width * 0.25 }}>
              <View style={{ marginBottom: 5 }}>
                <Text style={{ color: "#fff", fontFamily: "Abel-Regular" }}>
                  CVC
                </Text>
              </View>
              <View>
                <TextInput
                  onChangeText={_cvc}
                  value={cvc}
                  style={{
                    color: "#000",
                    backgroundColor: "#FFFFFF",
                    borderRadius: 4,
                  }}
                />
              </View>
            </View>
          </View>
          <View style={{ marginTop: height * 0.2 }}>
            <ImageBackground
              source={Images.BUTTON_BG}
              style={{ borderRadius: 10 }}
              resizeMode={"contain"}
            >
              <TouchableOpacity
                style={{
                  height: height * 0.1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                }}
                onPress={() => navigation.navigate("ConfirmAmount")}
              >
                <Text
                  style={{
                    color: "#A8C634",
                    fontFamily: "Alata-Regular",
                    fontSize: 20,
                    marginTop: -10,
                  }}
                >
                  Add Card Details
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </View>
      </Container>
    </View>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({});
