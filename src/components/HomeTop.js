import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Images from '../assets/images';
import {height, width} from '../services/dimensions';

export default function HomeTop({navigation}) {
  return (
    <View>
      <ImageBackground
        source={Images.HOME_BG}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.LogoMain}>
          <View
            // source={Images.HOME_TRAN}
            // resizeMode="cover"
            style={styles.logoBg}>
            <Image source={Images.HOME_LOGO} />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: '67%',
              height: '100%',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: '90%',
                backgroundColor: 'rgba(32, 30, 33, 0.7)',
                padding: 20,
              }}>
              <Text
                style={{
                  fontSize: 22,
                  color: '#fff',
                  fontFamily: 'Alata-Regular',
                  textTransform: 'uppercase',
                }}>
                We are democratizing the
                <Text style={{color: '#A8C634'}}>clean tech</Text> revolution
              </Text>
              <View style={{marginTop: 10}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('DecarbonizerMission')}>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontFamily: 'Alata-Regular',
                      fontSize: 18,
                    }}>
                    Our mission {'\b'} 〉
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{width: '33%', height: '100%'}}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate('FundingStage')}>
              <View
                style={{
                  backgroundColor: 'rgba(32, 30, 33, 0.7)',
                  // height: '50%',
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 12,
                    textAlign: 'right',
                    paddingTop: 10,
                    fontFamily: 'Alata-Regular',
                    paddingRight: 5,
                  }}>
                  Combined 5722t CO2 offset
                </Text>
                <View style={{paddingLeft: 10}}>
                  <Text
                    style={{
                      color: '#A8C634',
                      fontSize: 30,
                      fontFamily: 'Alata-Regular',
                    }}>
                    37
                  </Text>
                  <View>
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 18,
                        textTransform: 'uppercase',
                        fontFamily: 'Alata-Regular',
                      }}>
                      Projects
                    </Text>
                    <Text
                      style={{
                        color: '#fff',
                        fontFamily: 'Alata-Regular',
                        paddingBottom: 5,
                      }}>
                      all categories
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: 'rgba(32, 30, 33, 0.6)',
                // height: '50%',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 12,
                  textAlign: 'right',
                  paddingTop: 10,
                  fontFamily: 'Alata-Regular',
                  paddingRight: 5,
                }}>
                Actual 2143t CO2 offset
              </Text>
              <View style={{paddingLeft: 10}}>
                <Text
                  style={{
                    color: '#A8C634',
                    fontSize: 30,
                    fontFamily: 'Alata-Regular',
                  }}>
                  23
                </Text>
                <View>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 18,
                      textTransform: 'uppercase',
                      fontFamily: 'Alata-Regular',
                      paddingBottom: 5,
                    }}>
                    Projects Launched
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: '100%',
  },
  logoBg: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(32, 30, 33, 0.7)',
  },
  LogoMain: {
    height: 128,
    width: '100%',
  },
});
