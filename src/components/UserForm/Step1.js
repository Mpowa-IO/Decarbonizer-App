import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import UserText from "./UserText";
import Container from "../container";
import { height } from "../../services/dimensions";
import Images from "../../assets/images";

const Step1 = () => {
  return (
    <View>
      <ScrollView>
        <Container isPadding={true}>
          <View>
            <UserText Label={"First name *"} keyboardType={"default"} />
          </View>
          <View style={{ marginTop: height * 0.02 }}>
            <UserText Label={"Last name *"} keyboardType={"default"} />
          </View>
          <View style={{ marginTop: height * 0.02 }}>
            <UserText Label={"Mobile number *"} keyboardType={"default"} />
          </View>
          <View
            style={{ paddingTop: height * 0.02, paddingBottom: height * 0.02 }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                fontFamily: "Alata-Regular",
                textAlign: "center",
              }}
            >
              Please validate the mobile number by calling it while you are with
              the user!
            </Text>
          </View>
        </Container>
        <View
          style={{
            backgroundColor: "#323232",
            height: height * 0.5,
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 15,
          }}
        >
          <TouchableOpacity style={{ height: height * 0.08 }}>
            <ImageBackground
              source={Images.BUTTON_GREEN}
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontFamily: "Alata-Regular",
                  marginTop: height * -0.01,
                }}
              >
                Next
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={{ paddingBottom: 200 }} />
      </ScrollView>
    </View>
  );
};

export default Step1;
