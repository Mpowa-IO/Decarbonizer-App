import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Image,
} from "react-native";
import VirtualKeyboard from "react-native-virtual-keyboard";
import React, { useState } from "react";
import { height, width } from "../../services/dimensions";
import LinearGradient from "react-native-linear-gradient";
import DropDownPicker from "react-native-dropdown-picker";
import Images from "../../assets/images";
import Dropdown from "./Dropdown";

export default function WalletValue({ navigation }) {
  const [selected, setSelected] = useState(undefined);
  const data = [
    { label: "Visa Ending 3140", value: "1" },
    { label: "Mastercard Ending 5469", value: "2" },
    { label: "AMEX Ending 2578", value: "3" },
    { label: "Add New Payment Method", value: "4" },
    { label: "Five", value: "5" },
  ];
  const [cal, setCal] = useState("0");
  const changeText = (newText) => {
    setCal(newText);
  };

  return (
    <View style={{ width: "100%" }}>
      <View>
        <Text
          style={{
            color: "#fff",
            fontSize: 18,
            fontFamily: "Abel-Regular",
            textAlign: "left",
            marginLeft: width * 0.15,
            marginBottom: 10,
          }}
        >
          wallet value $250
        </Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <View>
          <Text
            style={{
              color: "#fff",
              fontSize: 48,
              fontFamily: "Alata-Regular",
              textAlign: "center",
            }}
          >
            ${cal}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View>
            <Image source={Images.TOKEN_BIG} />
          </View>
          <View>
            <Text
              style={{
                color: "#fff",
                fontSize: 48,
                fontFamily: "Alata-Regular",
                textAlign: "center",
              }}
            >
              $340
            </Text>
          </View>
        </View>
      </View>

      <View style={{ zIndex: -1 }}>
        <VirtualKeyboard
          color="white"
          pressMode="string"
          onPress={(val) => changeText(val)}
          decimal={"."}
          color="#348DCF"
          cellStyle={{ height: height * 0.1 }}
        />
      </View>
      <View
        style={{
          marginLeft: 40,
          marginRight: 40,
          marginTop: 10,
          borderRadius: 100,
        }}
      >
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
            onPress={() => navigation.navigate("Wallet")}
          >
            <Text
              style={{
                color: "#A8C634",
                fontFamily: "Alata-Regular",
                fontSize: 20,
                marginTop: -10,
              }}
            >
              Confirm amount
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
}
