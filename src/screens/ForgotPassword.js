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
import { postSignIn, resetForm } from "../store";
import { useRoute } from "@react-navigation/native";
const ForgotPassword = ({ navigation }) => {
  const dispatch = useDispatch();
  const route = useRoute();
  let backHandler = null;

  console.log("route is ", route);

  const { signInLoading, userTokenInfo } = useSelector(
    (state) => state.signInReducer
  );

  const { initial_email, email, verifyEmail, password, firstName, lastName } =
    useSelector((state) => state.account);

  console.log("initial_email from signIn", initial_email);
  console.log("email from signIn", email);
  console.log("firstName from signIn", firstName);
  console.log("lastName from signIn", lastName);

  // console.log("userTokenInfo", userTokenInfo);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      dispatch(resetForm());
    });
    return unsubscribe;
  }, []);

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email Address is Required"),
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
              BreadText={"Forgot Password "}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={styles.SocialView}>
            <Container isPadding>
              <InfoLabel
                Info={strings.ForgotPassword}
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
              initialValues={{ email: "", password: "" }}
              onSubmit={(values) => {
                dispatch(postSignIn(values));
              }}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <Container isPadding>
                  <TextInput
                    isLabel
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    placeholder={strings.UserID}
                    placeholderTextColor={"rgba(196, 196, 196, 0.54)"}
                    color={"#FFFFFF"}
                    keyboardType={"email-address"}
                    isInput
                  />
                  {errors.email && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.email}
                    </Text>
                  )}
                  <Button
                    isNormal
                    onPress={handleSubmit}
                    ButtonText={signInLoading ? "Login..." : strings.Next}
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
export default ForgotPassword;
