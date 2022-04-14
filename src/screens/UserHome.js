import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Logo from "../components/Logo";
import UserTop from "../components/UserHome/UserTop";
import UserBottom from "../components/UserHome/UserBottom";
import { height } from "../services/dimensions";

const UserHome = () => {
  return (
    <View style={{ backgroundColor: "#181818", flex: 1 }}>
      <View>
        <Logo />
      </View>
      <ScrollView>
        <View>
          <UserTop />
        </View>
        <View>
          <UserBottom />
        </View>
        <View style={{ paddingBottom: 50 }} />
      </ScrollView>
    </View>
  );
};

export default UserHome;

const styles = StyleSheet.create({});
