import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Formik } from "formik";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as yup from "yup";
import DropDownPicker from "react-native-dropdown-picker";
// component
import Container from "../components/container";
import Breadcrumbs from "../components/Breadcrumbs";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
// data
import { strings } from "../components/strings";
import InfoLabel from "../components/InfoLabel";
import { width, height } from "../services/dimensions";
import { useDispatch, useSelector } from "react-redux";
import { setCompanyDetails } from "../store/createAccount";

const CompanyDetails = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const {
    initial_email,
    email,
    verifyEmail,
    password,
    firstName,
    lastName,
    comapnyName,
    location,
    industry_category,
  } = useSelector((state) => state.account);

  console.log(
    "comapnyName",
    comapnyName,
    "location",
    location,
    "industry_category",
    industry_category
  );

  const [items, setItems] = useState([
    { label: "location1", value: "location1" },
    { label: "location2", value: "location2" },
  ]);
  const [setlectedLocation, setSetlectedLocation] = useState(location);

  const [checkLocation, setCheckLocation] = useState({
    isTouch: false,
    isCheck: false,
  });

  console.log("checklocation", checkLocation);

  const [checkIndustry, setCheckIndustry] = useState({
    isTouch: false,
    isCheck: false,
  });

  const [indurtyItem, SetindurtyItem] = useState([
    { label: "industry1", value: "indurty1" },
    { label: "indurty2", value: "indurty2" },
  ]);

  const [indurtyopen, setindurtyOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState(industry_category);
  const [zIndexMain, SetZindexMain] = useState(false);

  const handleChange = () => {
    SetZindexMain(!zIndexMain);
  };

  const loginValidationSchema = yup.object().shape({
    companyname: yup.string().required("This Field is require").trim(),
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
              BreadText={strings.CompanyDetails}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={styles.SocialView}>
            <Container isPadding>
              <InfoLabel Info={strings.CompanyDetailsInfo} />
            </Container>
          </View>
        </View>
        <ScrollView style={{ width: "100%" }}>
          <View style={styles.BottomView}>
            <Formik
              validationSchema={loginValidationSchema}
              initialValues={{ companyname: comapnyName }}
              onSubmit={(values) => {
                const { companyname } = values;
                console.log("go to the next screen", companyname);

                if (setlectedLocation === null && selectedIndustry === null) {
                  setCheckLocation({
                    ...checkLocation,
                    isCheck: true,
                  });
                  setCheckIndustry({
                    ...checkIndustry,
                    isCheck: true,
                  });
                } else if (
                  setlectedLocation !== null &&
                  selectedIndustry === null
                ) {
                  setCheckLocation({
                    ...checkLocation,
                    isCheck: false,
                  });
                  setCheckIndustry({
                    ...checkIndustry,
                    isCheck: true,
                  });
                } else if (
                  setlectedLocation === null &&
                  selectedIndustry !== null
                ) {
                  setCheckLocation({
                    ...checkLocation,
                    isCheck: true,
                  });
                  setCheckIndustry({
                    ...checkIndustry,
                    isCheck: false,
                  });
                } else {
                  dispatch(
                    setCompanyDetails({
                      companyname,
                      setlectedLocation,
                      selectedIndustry,
                    })
                  );
                  navigation.navigate("CompanySize");
                }
              }}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <Container isPadding>
                  <TextInput
                    isLabel
                    onChangeText={handleChange("companyname")}
                    onBlur={handleBlur("companyname")}
                    value={values.companyname}
                    placeholderTextColor={"rgba(196, 196, 196, 0.54)"}
                    Label={strings.CompanyDetailsText}
                    color={"#FFFFFF"}
                    isInput
                    style={{ marginBottom: 10 }}
                    defaultValue={comapnyName}
                  />
                  {errors.companyname && (
                    <Text style={styles.errorText}>{errors.companyname}</Text>
                  )}
                  <View style={{ position: "relative", zIndex: 999 }}>
                    <TextInput isLabel Label="Location" />
                    <DropDownPicker
                      open={open}
                      value={setlectedLocation}
                      items={items}
                      translation={{
                        PLACEHOLDER: "Select Location",
                      }}
                      onOpen={() => {
                        setCheckLocation({
                          ...checkLocation,
                          isTouch: true,
                        });
                      }}
                      onSelectItem={() => {
                        setCheckLocation({
                          ...checkLocation,
                          isCheck: false,
                        });
                      }}
                      setOpen={setOpen}
                      setValue={setSetlectedLocation}
                      setItems={setItems}
                      containerStyle={
                        {
                          // width: width * 0.9,
                        }
                      }
                      style={{ borderRadius: 2, zIndex: 9 }}
                      dropDownContainerStyle={{
                        borderRadius: 2,
                      }}
                      textStyle={{
                        fontFamily: "Alata-Regular",
                        color: "#434343",
                      }}
                      arrowIconStyle={{
                        tintColor: "#000",
                      }}
                    />
                  </View>

                  {checkLocation.isCheck === true &&
                  checkLocation.isTouch === false ? (
                    <Text style={styles.errorText}>Select Location</Text>
                  ) : null}
                  <View style={{ marginTop: 5, zIndex: 1 }}>
                    <TextInput isLabel Label="Industry / category" />

                    <DropDownPicker
                      open={indurtyopen}
                      value={selectedIndustry}
                      items={indurtyItem}
                      translation={{
                        PLACEHOLDER: "Select industry / category",
                      }}
                      onOpen={() => {
                        setCheckIndustry({
                          ...checkIndustry,
                          isCheck: false,
                        });
                      }}
                      onSelectItem={() => {
                        setCheckIndustry({
                          ...checkIndustry,
                          isTouch: false,
                        });
                      }}
                      setOpen={setindurtyOpen}
                      setValue={setSelectedIndustry}
                      setItems={SetindurtyItem}
                      // containerStyle={{width: width * 0.8}}
                      style={{ borderRadius: 2 }}
                      dropDownContainerStyle={{
                        borderRadius: 2,
                        zIndex: 22,
                      }}
                      textStyle={{
                        fontFamily: "Alata-Regular",
                        color: "#434343",
                      }}
                      arrowIconStyle={{
                        tintColor: "#000",
                      }}
                      dropDownDirection={"down"}
                    />
                  </View>
                  <View style={styles.DropDown}></View>
                  {checkIndustry.isCheck === true &&
                  checkIndustry.isTouch === false ? (
                    <Text style={styles.errorText}>Select Industry</Text>
                  ) : null}
                  <Button
                    isNormal
                    onPress={() => {
                      handleSubmit();
                    }}
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
  DropDown: {
    marginTop: 10,
  },
  errorText: {
    color: "red",
    fontSize: width / 35,
  },
});
export default CompanyDetails;
