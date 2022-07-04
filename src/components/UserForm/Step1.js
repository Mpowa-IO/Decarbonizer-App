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
import UserFormTop from "./UserFormTop";
import UserFormDetails from "./UserFormDetails";

const Step1 = (props) => {
  const { onPress } = props;

  console.log(props, "this is props");

  return (
    <View>
      <View style={{ marginTop: height * 0.05 }}>
        <UserFormTop title={"User registration step 1"} isOne {...props} />
      </View>
      <View>
        <UserFormDetails title={"Please enter user information below."} />
      </View>
      <ScrollView>
        <Container isPadding={true} style={{ marginTop: height * 0.03 }}>
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
            height: height * 0.3,
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 15,
          }}
        >
          <TouchableOpacity style={{ height: height * 0.08 }} onPress={onPress}>
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
        <View style={{ paddingBottom: height * 0.8 }} />
      </ScrollView>
    </View>
  );
};

export default Step1;
