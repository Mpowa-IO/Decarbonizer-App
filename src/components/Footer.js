import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Footer({style}) {
  return (
    <View style={[style, {backgroundColor: '#323232', height: 30}]}>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
