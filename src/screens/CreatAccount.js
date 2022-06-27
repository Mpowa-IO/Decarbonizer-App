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
import { CA } from "../services/data";
import { strings } from "../components/strings";
import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "../store";
const CreatAccount = ({ navigation }) => {
  const dispatch = useDispatch();
  const { initial_email } = useSelector((state) => state.account);
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email Address is Required")
      .trim(),
  });

  console.log("initial_email at create account", initial_email);

  return (
    <KeyboardAwareScrollView style={styles.CreatAccountStyle}>
      <View style={styles.TopItem}>
        <View>
          <Breadcrumbs
            BreadText={strings.CreateAC}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.SocialView}>
          <Container isPadding>
            {CA?.map((item, index) => {
              return (
                <Button
                  key={index + 1}
                  isSocialButton
                  url={item.image}
                  ButtonColor={item.ButtonColor}
                  ButtonText={item.text}
                  TextColor={item.TextColor}
                  style={{ marginBottom: index === CA.length - 1 ? 0 : 20 }}
                />
              );
            })}
          </Container>
        </View>
      </View>
      <ScrollView>
        <View style={styles.BottomView}>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ email: initial_email }}
            onSubmit={(values) => {
              dispatch(setEmail(values.email));
              navigation.navigate("AccountDetails");
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
                  defaultValue={initial_email}
                />
                {errors.email && (
                  <Text style={{ fontSize: 10, color: "red" }}>
                    {errors.email}
                  </Text>
                )}
                <Button
                  isNormal
                  onPress={handleSubmit}
                  ButtonText={strings.SignUpEmail}
                  ButtonColor={"#666666"}
                  TextColor={"#E5E5E5"}
                  style={{ marginTop: 20 }}
                />
              </Container>
            )}
          </Formik>
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  CreatAccountStyle: {
    backgroundColor: "#201E21",
    flex: 1,
  },
  TopItem: {
    backgroundColor: "#313131",
  },
  SocialView: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  BottomView: {
    flex: 0.5,
    paddingTop: 30,
  },
});
export default CreatAccount;
