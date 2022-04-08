import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const InfoLabel = ({Info, style, textAlign}) => {
  return (
    <View style={style}>
      <Text style={[styles.InfoText, {textAlign: textAlign}]}>{Info}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  InfoText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontFamily: 'Alata-Regular',
  },
});
export default InfoLabel;
