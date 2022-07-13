import React from "react";
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
import { postSignup, resetForm, setNames } from "../store";
import { resetSingup } from "../store/signup/action";

const Yourname = ({ navigation }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.account);
  const { initial_email, email, verifyEmail, password, firstName, lastName } =
    useSelector((state) => state.account);

  const { signUp_loading } = useSelector((state) => state.signupReducer);
  const { success_message } = useSelector((state) => state.signupReducer);
  console.log("success_message", success_message);

  const loginValidationSchema = yup.object().shape({
    first_name: yup
      .string()
      .required("First Name  is Required")
      .min(4, "First Name must be a 4 Characters")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
      .trim(),
    last_name: yup
      .string()
      .required("Last Name is required")
      .min(4, "Last Name must be a 4 Characters")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
      .trim(),
  });

  console.log("initial_email", initial_email);
  console.log("email", email);
  console.log("firstName", firstName);
  console.log("lastName", lastName);
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
              BreadText={strings.Yourname}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={styles.SocialView}>
            <Container isPadding>
              <InfoLabel Info={strings.AFew} />
            </Container>
          </View>
        </View>
        <ScrollView style={{ width: "100%" }}>
          <View style={styles.BottomView}>
            <Formik
              validationSchema={loginValidationSchema}
              initialValues={{ first_name: firstName, last_name: lastName }}
              onSubmit={(values) => {
                console.log("on submit values ", values);
                // dispatch(setNames(values));

                if (success_message) {
                  navigation.navigate("SignIn");
                  dispatch(resetSingup());
                  dispatch(resetForm());
                } else {
                  dispatch(setNames(values));
                  dispatch(
                    postSignup({
                      email,
                      password,
                      ...values,
                    })
                  );
                }
              }}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <Container isPadding>
                  {console.log(values)}
                  <TextInput
                    isLabel
                    isInput
                    onChangeText={handleChange("first_name")}
                    onBlur={handleBlur("first_name")}
                    value={values.first_name}
                    Label={strings.FirstName}
                    defaultValue={firstName ? firstName : ""}
                    color={"#FFFFFF"}
                  />
                  {errors.first_name && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.first_name}
                    </Text>
                  )}
                  <TextInput
                    isLabel
                    isInput
                    onChangeText={handleChange("last_name")}
                    onBlur={handleBlur("last_name")}
                    value={values.last_name}
                    Label={strings.LastName}
                    color={"#FFFFFF"}
                    defaultValue={lastName ? lastName : ""}
                    style={{ marginTop: 5 }}
                  />

                  {errors.last_name && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.last_name}
                    </Text>
                  )}
                  <Button
                    isNormal
                    onPress={handleSubmit}
                    ButtonText={signUp_loading ? "Creating Account..." : "Next"}
                    ButtonColor={"#A8C634"}
                    TextColor={"#E5E5E5"}
                    style={{ marginTop: 20 }}
                  />
                  <Text
                    style={{
                      color: "#E5E5E5",
                      marginTop: 10,
                    }}
                  >
                    {success_message
                      ? `${success_message} Please Click on mail Link and Login again`
                      : null}
                  </Text>
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
    height: height * 0.2,
  },
  BottomView: {
    // flex: 0.5,
    paddingTop: 30,
  },
});
export default Yourname;
