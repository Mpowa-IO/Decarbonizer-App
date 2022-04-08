import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Category = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontFamily: 'Alata-Regular', color: '#fff'}}>
        This is a Category Screen
      </Text>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
