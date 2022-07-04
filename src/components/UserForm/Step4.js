import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Linking,
} from "react-native";
import React from "react";
import UserText from "./UserText";
import Container from "../container";
import { height } from "../../services/dimensions";
import Images from "../../assets/images";
import UserFormTop from "./UserFormTop";
import UserFormDetails from "./UserFormDetails";
import QRCodeScanner from "react-native-qrcode-scanner";
import { RNCamera } from "react-native-camera";

const Step4 = (props) => {
  const { navigation } = props;

  const onSuccess = (e) => {
    console.error("An error occured");
  };

  return (
    <View style={{ backgroundColor: "#181818", flex: 1 }}>
      <View style={{ marginTop: height * 0.05 }}>
        <UserFormTop title={"User registration step 4"} isFour {...props} />
      </View>
      <View>
        <UserFormDetails
          title={"Please locate and scan the QR code on the device."}
          style={{ paddingLeft: 15 }}
        />
      </View>
      <View style={{ backgroundColor: "red", marginTop: height * 0.1 }}>
        <QRCodeScanner
          onRead={onSuccess()}
          flashMode={RNCamera.Constants.FlashMode.off}
          topContent={
            <Text style={styles.centerText}>
              Go to
              <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
              your computer and scan the QR code.
            </Text>
          }
          bottomContent={
            <TouchableOpacity style={styles.buttonTouchable}>
              <Text style={styles.buttonText}>OK. Got it!</Text>
            </TouchableOpacity>
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: "#777",
  },
  textBold: {
    fontWeight: "500",
    color: "#000",
  },
  buttonText: {
    fontSize: 21,
    color: "rgb(0,122,255)",
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default Step4;
