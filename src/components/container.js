import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Container({children, isPadding, isFlex, style}) {
  return (
    <View
      style={[
        style,
        {
          paddingLeft: isPadding && 30,
          paddingRight: isPadding && 30,
          flex: isFlex && 1,
        },
      ]}>
      {children}
    </View>
  );
}
