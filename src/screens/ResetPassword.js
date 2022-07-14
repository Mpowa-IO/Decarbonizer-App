import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  BackHandler,
} from "react-native";
import { Formik } from "formik";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as yup from "yup";
// component
import Container from "../components/container";
import Breadcrumbs from "../components/Breadcrumbs";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import Images from "../assets/images";

// data
import { CA } from "../services/data";
import { strings } from "../components/strings";
import InfoLabel from "../components/InfoLabel";
import Footer from "../components/Footer";
import { height } from "../services/dimensions";
import { useDispatch, useSelector } from "react-redux";
import { postSignIn, resetForm, resetPassWord } from "../store";
import { useRoute } from "@react-navigation/native";

const ResetPassword = ({ navigation }) => {
  const dispatch = useDispatch();
  const route = useRoute();
  let backHandler = null;

  console.log("route is ", route);

  const { signInLoading, userTokenInfo } = useSelector(
    (state) => state.signInReducer
  );

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      dispatch(resetForm());
    });
    return unsubscribe;
  }, []);

  const loginValidationSchema = yup.object().shape({
    password: yup
      .string()
      .required("Password is Required")
      .min(6, "Your password must be longer than 6 characters.")
      .matches(/^(?=.{6,})/, "Must Contain 6 Characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])/,
        "Must Contain One Uppercase, One Lowercase"
      )
      .matches(
        /^(?=.*[!@#\$%\^&\*])/,
        "Must Contain One Special Case Character"
      )
      .matches(/^(?=.{6,20}$)\D*\d/, "Must Contain One Number")
      .trim(),
  });

  return (
    <KeyboardAwareScrollView style={styles.CreatAccountStyle}>
      <View
        style={{
          alignItems: "center",
          height: height * 0.95,
          backgroundColor: "#201E21",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.TopItem}>
          <View
            style={[
              styles.logoView,
              {
                paddingTop: 30,
                justifyContent: "center",
                alignItems: "center",
              },
            ]}
          >
            <Image source={Images.LOGO} />
          </View>
          <View>
            <Breadcrumbs
              BreadText={"Reset Password"}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={styles.SocialView}>
            <Container isPadding>
              <InfoLabel
                Info={"Please Enter a New Password"}
                style={{ paddingTop: 20 }}
                textAlign={"center"}
              />
            </Container>
          </View>
        </View>
        <ScrollView style={{ width: "100%" }}>
          <View style={styles.BottomView}>
            <Formik
              validationSchema={loginValidationSchema}
              initialValues={{ password: "" }}
              onSubmit={(values) => {
                console.log("vvalues", values);
              }}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <Container isPadding>
                  <TextInput
                    isLabel
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    placeholder={strings.ResetPassword}
                    placeholderTextColor={"rgba(196, 196, 196, 0.54)"}
                    color={"#FFFFFF"}
                    keyboardType={"email-address"}
                    isInput
                  />
                  {errors.password && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.password}
                    </Text>
                  )}

                  <Text
                    style={{
                      color: "#D1D1D6",
                      fontFamily: "Alata-Regular",
                      paddingTop: 5,
                      paddingBottom: 5,
                    }}
                  >
                    Your password should have minimum of 6 characters, one
                    capital letter, one number, and one special character.
                  </Text>
                  <Button
                    isNormal
                    onPress={handleSubmit}
                    ButtonText={signInLoading ? "Updating" : strings.Next}
                    ButtonColor={"#A8C634"}
                    TextColor={"#E5E5E5"}
                    style={{ marginTop: 40 }}
                  />
                </Container>
              )}
            </Formik>
          </View>
        </ScrollView>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  CreatAccountStyle: {
    backgroundColor: "#313131",
    height: height * 1,
  },
  TopItem: {
    backgroundColor: "#313131",
  },
  SocialView: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  BottomView: {
    // flex: 0.5,
    paddingTop: 30,
  },
});
export default ResetPassword;
