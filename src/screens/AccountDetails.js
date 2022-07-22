import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Formik } from "formik";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as yup from "yup";
// component
import Container from "../components/container";
import Breadcrumbs from "../components/Breadcrumbs";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
// data
import { strings } from "../components/strings";
import InfoLabel from "../components/InfoLabel";
import { height } from "../services/dimensions";
import { useDispatch, useSelector } from "react-redux";
import { setAccount } from "../store";
import CustomPasswordInput from "../components/CustomPasswordInput";

const AccountDetails = ({ navigation }) => {
  const dispatch = useDispatch();

  const { initial_email, email, verifyEmail, password } = useSelector(
    (state) => state.account
  );

  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const togglePassWordVisible = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .trim()
      .required("Email Address is Required")
      .matches(initial_email, "Email Not Match With Previous Mail"),
    password: yup
      .string()
      .required("password  is Required")
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

  console.log("email", email);
  console.log("verifyEmail", verifyEmail);
  console.log("password", password);
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
          <View>
            <Breadcrumbs
              BreadText={strings.AccountDetails}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={styles.SocialView}>
            <Container isPadding>
              <InfoLabel Info={strings.Thanks} />
            </Container>
          </View>
        </View>
        <ScrollView style={{ width: "100%" }}>
          <View style={styles.BottomView}>
            <Formik
              validationSchema={loginValidationSchema}
              initialValues={{
                email: email,
                verifyEmail: verifyEmail,
                password: password,
              }}
              onSubmit={(values) => {
                console.log(values);
                dispatch(setAccount(values));
                navigation.navigate("Yourname");
              }}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <Container isPadding>
                  <TextInput
                    isLabel
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    placeholder={strings.emailPlaceholder}
                    placeholderTextColor={"rgba(196, 196, 196, 0.54)"}
                    Label={strings.email}
                    color={"#FFFFFF"}
                    keyboardType={"email-address"}
                    isInput
                    defaultValue={email ? email : ""}
                  />
                  {errors.email && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.email}
                    </Text>
                  )}
                  <TextInput
                    onChangeText={handleChange("verifyEmail")}
                    onBlur={handleBlur("verifyEmail")}
                    value={values.verifyEmail}
                    placeholder={strings.VerifyEmail}
                    placeholderTextColor={"rgba(196, 196, 196, 0.54)"}
                    color={"#FFFFFF"}
                    keyboardType={"email-address"}
                    style={{ marginTop: 20 }}
                    defaultValue={verifyEmail ? verifyEmail : ""}
                    isInput
                  />
                  <CustomPasswordInput
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    placeholder={strings.Password}
                    placeholderTextColor={"rgba(196, 196, 196, 0.54)"}
                    color={"#FFFFFF"}
                    style={{ marginTop: 20 }}
                    isPassword
                    isInput
                    togglePassword={togglePassWordVisible}
                    defaultValue={password ? password : ""}
                    hidePassword={isPasswordVisible}
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
                    ButtonText={strings.Next}
                    ButtonColor={"#A8C634"}
                    TextColor={"#E5E5E5"}
                    style={{ marginTop: 20 }}
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
export default AccountDetails;
