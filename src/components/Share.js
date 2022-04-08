import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Images from '../assets/images';

const Share = () => {
  return (
    <View
      style={{
        backgroundColor: '#181818',
        flexDirection: 'row',
        height: 414,
        paddingBottom: 150,
        justifyContent: 'center',
        alignItems: 'flex-end',
      }}>
      <Image source={Images.SHARE} />
      <Text
        style={{color: '#fff', marginLeft: 10, fontFamily: 'Alata-Regular'}}>
        Share this project
      </Text>
    </View>
  );
};

export default Share;

const styles = StyleSheet.create({});
