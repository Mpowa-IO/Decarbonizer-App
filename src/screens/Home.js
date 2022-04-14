import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import BottomNav from "../components/BottomNav";
import HomeBottom from "../components/HomeBottom";
import HomeCenter from "../components/HomeCenter";
import HomeTop from "../components/HomeTop";
import MyTabs from "../services/navigation/BottomTab";
import BottomTab from "../services/navigation/BottomTab";

export default function Home(props) {
  const { navigation } = props;
  return (
    // <ScrollView style={{flex: 1}}>
    <View
      style={{
        flex: 1,
        // backgroundColor:'#000'
      }}
    >
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.HomeTopWrapper}>
            <HomeTop {...props} />
          </View>
        </View>
        <View>
          <HomeCenter {...props} />
        </View>
        <View
          style={{
            paddingBottom: 80,
          }}
        >
          <HomeBottom {...props} />
        </View>
      </ScrollView>
    </View>

    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  HomeTopWrapper: {
    // flex: 0,
  },
});
