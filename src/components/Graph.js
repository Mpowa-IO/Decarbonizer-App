import { View, Text, Image } from "react-native";
import React from "react";
import Images from "../assets/images";

export default function Graph() {
  return (
    <View style={{ padding: 10 }}>
      <Image source={Images.GRAPH_DASHBOARD} />
    </View>
  );
}
