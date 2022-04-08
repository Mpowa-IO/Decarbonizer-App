import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Images from "../assets/images";

const HomeBottom = ({ navigation }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate("HowDecarbonizerWorks")}
      >
        <View
          style={{
            position: "relative",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <View>
            <Image source={Images.HOME_LEFT_IMG} />
          </View>
          <View style={{ position: "absolute", left: 0, right: 0 }}>
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
                textAlign: "center",
                fontFamily: "Alata-Regular",
              }}
            >
              HOW{"\n"} DECARBONIZER {"\n"} WORKS
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={{ position: "relative" }}>
        <View>
          <Image source={Images.HOME_RIGHT_IMG} />
        </View>
        <View style={{ position: "absolute", left: 0, right: 0 }}>
          <Text
            style={{
              textTransform: "uppercase",
              color: "#fff",
              fontSize: 20,
              textAlign: "center",
              fontFamily: "Alata-Regular",
              paddingTop: 15,
            }}
          >
            pROJECT nEWS
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 15,
              marginTop: 15,
            }}
          >
            <View style={{ marginRight: 15 }}>
              <Image source={Images.FLAG} />
            </View>
            <Text
              style={{
                color: "#fff",
                color: "#fff",
                fontSize: 22,
                textAlign: "center",
                fontFamily: "Alata-Regular",
              }}
            >
              Malawi
            </Text>
          </View>
          <View style={{ marginTop: 10, marginLeft: 15 }}>
            <Text style={{ color: "#fff", fontFamily: "Alata-Regular" }}>
              Proin Gravida Solvatten {"\n"} project 59% funded...
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeBottom;

const styles = StyleSheet.create({});
