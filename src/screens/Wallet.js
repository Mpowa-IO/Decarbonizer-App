import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Container from "../components/container";

import Logo from "../components/Logo";
import CashCard from "../components/wallet/CashCard";
import TokenCard from "../components/wallet/TokenCard";

const Wallet = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View>
        <Logo />
      </View>
      <View>
        <CashCard {...props} />
      </View>
      <View>
        <TokenCard {...props} />
      </View>
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181818",
  },
});
