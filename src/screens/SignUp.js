import React, { useEffect } from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
// images
import Images from "../assets/images";
// Custom Components
import { strings } from "../components/strings";
import Container from "../components/container";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { resetForm } from "../store";

const SignUp = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      dispatch(resetForm());
    });
    return unsubscribe;
  }, []);

  return (
    <ImageBackground source={Images.SIGN_UP} style={styles.container}>
      <Container isPadding isFlex>
        <View style={styles.LogoView}>
          <Image source={Images.LOGO} style={styles.logo} />
        </View>
        <View style={styles.TextView}>
          <Text style={styles.text}>{strings.SingUpText}</Text>
        </View>
        <View style={styles.ButtonView}>
          <View style={[styles.innerBtn, { marginBottom: 20 }]}>
            <Button
              ButtonText={strings.CreateAnAC}
              ButtonColor={"#A8C634"}
              TextColor={"#FFFFFF"}
              isNormal
              onPress={() => navigation.navigate("CreatAccount")}
            />
          </View>
          <View style={styles.innerBtn}>
            <Button
              ButtonText={strings.AlreadyAC}
              ButtonColor={"#FFFFFF"}
              TextColor={"#434343"}
              isNormal
              onPress={() => navigation.navigate("SignIn")}
            />
          </View>
        </View>
      </Container>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  LogoView: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },
  TextView: {
    // flex: 0.1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 28,
    textAlign: "center",
    fontFamily: "Alata-Regular",
  },
  ButtonView: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "flex-end",
    // backgroundColor: 'red',
  },
  innerBtn: {
    width: "100%",
  },
});

export default SignUp;
