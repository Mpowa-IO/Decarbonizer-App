import React from 'react';
import {View, Text, ImageBackground, StyleSheet, Image} from 'react-native';
// images
import Images from '../assets/images';
// Custom Components
import {strings} from '../components/strings';
import Container from '../components/container';
import Button from '../components/Button';

const TakeTour = ({navigation}) => {
  return (
    <ImageBackground
      source={Images.TAKE_TOUR}
      resizeMode="cover"
      style={styles.container}>
      <Container isPadding isFlex>
        <View style={styles.LogoView}>
          <Image source={Images.LOGO} style={styles.logo} />
        </View>
        <View style={styles.TextView}>
          <Text style={[styles.text, {marginBottom: 15}]}>
            {strings.TourText}
          </Text>
          <Text style={styles.text}>{strings.NextTour}</Text>
        </View>
        <View style={styles.ButtonView}>
          <View style={[styles.innerBtn, {marginBottom: 20}]}>
            <Button
              ButtonText={strings.TakeTheTour}
              ButtonColor={'#A8C634'}
              TextColor={'#FFFFFF'}
              isNormal
              onPress={() => console.log('hello')}
            />
          </View>
          <View style={styles.innerBtn}>
            <Button
              ButtonText={strings.SkiptheTour}
              //   ButtonColor={'#FFFFFF'}
              TextColor={'#FFFFFF'}
              isNormal
            />
          </View>
        </View>
      </Container>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  LogoView: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextView: {
    // flex: 0.1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 28,
    // textAlign: 'center',
    fontFamily: 'Alata-Regular',
  },
  ButtonView: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'flex-end',
    // backgroundColor: 'red',
  },
  innerBtn: {
    width: '100%',
  },
});

export default TakeTour;
