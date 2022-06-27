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
import { postSignup, resetForm, setCarbon } from "../store";
const YouCarbon = ({ navigation }) => {
  const dispatch = useDispatch();
  const { in_role } = useSelector((state) => state.account);

  const [yourCarban, setYourCarban] = useState([
    { info: "Am responsble for ESG / carbon offset", id: 1 },
    { info: "Influence decision making on this topic", id: 2 },
    { info: "Am thinking about taking the next steps", id: 3 },
    { info: "Other", id: 4 },
  ]);

  const [selectCarbon, setSelectCarbon] = useState(in_role);

  const data = useSelector((state) => state.account);

  console.log("data", data);

  return (
    <View style={styles.CreatAccountStyle}>
      <View
        style={{
          alignItems: "center",
          height: height * 0.95,
          //   backgroundColor: '#201E21',
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.TopItem}>
          <View>
            <Breadcrumbs
              BreadText={strings.YouESG}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={styles.SocialView}>
            <Container isPadding>
              <InfoLabel Info={strings.PleaseTell} />
            </Container>
          </View>
        </View>
        <ScrollView style={{ width: "100%" }}>
          <View style={[styles.BottomView]}>
            <Container isPadding>
              <TextInput isLabel Label={"In my role, I..."} />
              <View style={styles.MainSelect}>
                {yourCarban.map((role) => {
                  return (
                    <TouchableOpacity
                      key={role.id}
                      style={{
                        borderBottomColor: "#C4C4C4",
                        borderBottomWidth: 1,
                        paddingBottom: 10,
                        paddingTop: 10,
                        backgroundColor:
                          selectCarbon.id === role.id ? "#e6e6e6" : "white",
                      }}
                      onPress={() => {
                        console.log("ino", role);
                        setSelectCarbon(role);
                      }}
                    >
                      <Text style={styles.MainSelectText}>{role.info}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
              <Button
                isNormal
                onPress={() => {
                  dispatch(setCarbon(selectCarbon));
                  dispatch(postSignup(data));
                  dispatch(resetForm());
                  navigation.navigate("TakeTour");
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
                  marginTop: 5,
                  shadowColor: "#0000",
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  shadowOpacity: 0,
                  shadowRadius: 0,
                  elevation: 0,
                }}
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
    paddingTop: 10,
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
export default YouCarbon;
