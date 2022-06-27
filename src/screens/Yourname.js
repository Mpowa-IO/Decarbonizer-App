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
import { setNames } from "../store";

const Yourname = ({ navigation }) => {
  const dispatch = useDispatch();

  const { initial_email, email, verifyEmail, password, firstName, lastName } =
    useSelector((state) => state.account);

  console.log(
    "values at Your Names Screen",
    email,
    "verifyEmail",
    verifyEmail,
    "password",
    password,
    "initial_email",
    initial_email,
    "verifyEmail",
    verifyEmail,
    "firstName",
    firstName,
    "lastName",
    lastName
  );
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
                console.log(values);
                dispatch(setNames(values));
                navigation.navigate("CompanyDetails");
              }}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <Container isPadding>
                  {console.log(values)}
                  <TextInput
                    isLabel
                    onChangeText={handleChange("first_name")}
                    onBlur={handleBlur("first_name")}
                    value={values.first_name}
                    Label={strings.FirstName}
                    defaultValue={values.first_name}
                    color={"#FFFFFF"}
                    isInput
                  />
                  {errors.first_name && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.first_name}
                    </Text>
                  )}
                  <TextInput
                    isLabel
                    onChangeText={handleChange("last_name")}
                    onBlur={handleBlur("last_name")}
                    value={values.last_name}
                    Label={strings.LastName}
                    color={"#FFFFFF"}
                    defaultValue={values.last_name}
                    style={{ marginTop: 5 }}
                    isInput
                  />

                  {errors.last_name && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.last_name}
                    </Text>
                  )}
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
    height: height * 0.2,
  },
  BottomView: {
    // flex: 0.5,
    paddingTop: 30,
  },
});
export default Yourname;
