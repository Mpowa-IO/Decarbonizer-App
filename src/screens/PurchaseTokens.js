import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Logo from "../components/Logo";
import WalletValue from "../components/wallet/WalletValue";

const PurchaseTokens = (props) => {
  const { navigation } = props;
  return (
    <View style={{ flex: 1, backgroundColor: "#181818" }}>
      <View>
        <Logo {...props} />
      </View>
      <View style={{ alignItems: "center" }}>
        <WalletValue {...props} />
      </View>
    </View>
  );
};

export default PurchaseTokens;

const styles = StyleSheet.create({});
