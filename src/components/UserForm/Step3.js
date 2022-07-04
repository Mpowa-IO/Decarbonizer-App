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

const Step3 = (props) => {
  const { navigation } = props;
  return (
    <View style={{ backgroundColor: "#181818", flex: 1 }}>
      <View style={{ marginTop: height * 0.05 }}>
        <UserFormTop title={"User registration step 3"} isThree {...props} />
      </View>
      <View>
        <UserFormDetails title={"Please enter user information below."} />
      </View>
      <ScrollView>
        <Container isPadding={true} style={{ marginTop: height * 0.03 }}>
          <View>
            <UserText Label={"Address line 1  *"} keyboardType={"default"} />
          </View>
          <View style={{ marginTop: height * 0.02 }}>
            <UserText Label={"Address line 2 *"} keyboardType={"default"} />
          </View>
          <View style={{ marginTop: height * 0.02 }}>
            <UserText Label={"Town / City *"} keyboardType={"default"} />
          </View>
          <View style={{ marginTop: height * 0.02 }}>
            <UserText Label={"Postal Code*"} keyboardType={"default"} />
          </View>
        </Container>
        <View
          style={{
            backgroundColor: "#323232",
            height: height * 0.3,
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 30,
            marginTop: 30,
          }}
        >
          <TouchableOpacity
            style={{ height: height * 0.08 }}
            onPress={() => navigation.navigate("Step4")}
          >
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
        <View style={{ paddingBottom: height * 0.0 }} />
      </ScrollView>
    </View>
  );
};

export default Step3;
