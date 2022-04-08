import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Wallet = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontFamily: 'Alata-Regular', color: '#fff'}}>
        This is a Wallet Screen
      </Text>
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
