import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
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
import { setCompanySize } from "../store";

const CompanySize = ({ navigation }) => {
  const [companySize, setCompanysize] = useState([
    { size: "0-50 ", id: "0" },
    { size: "50-500 ", id: "50" },
    { size: "500-5000 ", id: "500" },
    { size: "Over 500", id: "5000" },
  ]);

  const dispatch = useDispatch();

  const { company_size } = useSelector((state) => state.account);

  const [selectedSize, setSelectedSize] = useState(company_size);

  return (
    <View style={styles.CreatAccountStyle}>
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
              BreadText={strings.CompanySize}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={styles.SocialView}>
            <Container isPadding>
              <InfoLabel Info={strings.AndHow} />
            </Container>
          </View>
        </View>
        <ScrollView style={{ width: "100%" }}>
          <View style={[styles.BottomView]}>
            <Container isPadding>
              <TextInput isLabel Label={"Number of employees"} />
              <View style={styles.MainSelect}>
                {companySize.map((company, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      style={{
                        borderBottomColor: "#C4C4C4",
                        borderBottomWidth: 1,
                        paddingBottom: 10,
                        paddingTop: 10,
                        backgroundColor:
                          selectedSize.id === company.id ? "#e6e6e6" : "white",
                      }}
                      onPress={() => {
                        setSelectedSize(company);
                      }}
                    >
                      <Text style={styles.MainSelectText}> {company.size}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
              <Button
                isNormal
                onPress={() => {
                  dispatch(setCompanySize(selectedSize));
                  navigation.navigate("YouCarbon");
                }}
                ButtonText={strings.Next}
                ButtonColor={"#A8C634"}
                TextColor={"#E5E5E5"}
                style={{ marginTop: 40 }}
              />
              <Button
                isNormal
                onPress={() => console.log("hello")}
                ButtonText={strings.Skip}
                TextColor={"#E5E5E5"}
                style={{
                  marginTop: 20,
                  shadowColor: "#0000",
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  shadowOpacity: 0,
                  shadowRadius: 0,

                  elevation: 0,
                }}
                ButtonColor={"#201E21"}
              />
            </Container>
          </View>
        </ScrollView>
      </View>
    </View>
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
    width: "100%",
  },
  DropDown: {
    marginTop: 10,
  },
  MainSelect: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 6,
    marginTop: 10,
  },
  MainSelectText: {
    fontSize: 18,
    fontFamily: "Alata-Regular",
    color: "#434343",
  },
  PressableText: {
    borderBottomColor: "#C4C4C4",
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingTop: 10,
  },
});
export default CompanySize;
