import React from 'react';
import {StyleSheet, Text, View, Pressable, Image} from 'react-native';

export default function Button(props) {
  const {
    ButtonText,
    ButtonColor,
    TextColor,
    onPress,
    isNormal,
    isSocialButton,
    url,
    style,
  } = props;
  return (
    <View style={style}>
      {isNormal && (
        <Pressable
          style={[styles.button, {backgroundColor: ButtonColor}]}
          onPress={onPress}>
          <Text style={[styles.BtnText, {color: TextColor}]}>{ButtonText}</Text>
        </Pressable>
      )}
      {isSocialButton && (
        <Pressable
          style={[styles.button, {backgroundColor: ButtonColor}]}
          onPress={onPress}>
          <View style={styles.SocialButton}>
            <View style={styles.SocialImg}>
              <Image source={url} />
            </View>
            <View style={styles.SocialBtn}>
              <Text style={[styles.BtnText, {color: TextColor}]}>
                {ButtonText}
              </Text>
            </View>
          </View>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    // height: 63,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // elevation: 15,
  },
  BtnText: {
    fontSize: 18,
    fontFamily: 'Alata-Regular',
  },
  SocialButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  SocialBtn: {
    marginLeft: 10,
  },
});
