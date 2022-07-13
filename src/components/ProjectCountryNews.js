import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  TouchableHighlight,
  ActivityIndicator,
} from "react-native";
import Images from "../assets/images";
import { width } from "../services/dimensions";

const ProjectCountryNews = ({ news }) => {
  return (
    <View>
      <View>
        {news.image_url ? (
          <View
            style={{
              position: "relative",
            }}
          >
            <Image
              style={{
                height: 250,
                width: "100%",
              }}
              source={{
                uri: news?.image_url,
              }}
            />
          </View>
        ) : (
          <View
            style={{
              position: "relative",
            }}
          >
            <Image source={Images.COUNTRY_NEWS} />
          </View>
        )}

        <View
          style={{
            position: "absolute",
            left: 10,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 24,
              fontFamily: "Alata-Regular",
              textAlign: "left",
            }}
          >
            {news?.country?.name} News
          </Text>
        </View>

        <View
          style={{
            position: "absolute",
            width: width * 0.8,
            bottom: 0,
            left: 10,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 24,
              fontFamily: "Alata-Regular",
              textAlign: "left",
            }}
          >
            {news?.title}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProjectCountryNews;
