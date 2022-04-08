import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, Pressable} from 'react-native';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as yup from 'yup';
import DropDownPicker from 'react-native-dropdown-picker';

// component
import Container from '../components/container';
import Breadcrumbs from '../components/Breadcrumbs';
import Button from '../components/Button';
import TextInput from '../components/TextInput';

// data
import {CA} from '../services/data';
import {strings} from '../components/strings';
import InfoLabel from '../components/InfoLabel';
import Footer from '../components/Footer';
import {height} from '../services/dimensions';

const YouCarbon = ({navigation}) => {
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });

  return (
    <View style={styles.CreatAccountStyle}>
      <View
        style={{
          alignItems: 'center',
          height: height * 0.95,
          //   backgroundColor: '#201E21',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.TopItem}>
          <View>
            <Breadcrumbs
              BreadText={strings.YouESG}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={styles.SocialView}>
            <Container isPadding>
              <InfoLabel Info={strings.PleaseTell} />
            </Container>
          </View>
        </View>
        <ScrollView style={{width: '100%'}}>
          <View style={[styles.BottomView]}>
            <Container isPadding>
              <TextInput isLabel Label={'In my role, I...'} />
              <View style={styles.MainSelect}>
                <Pressable style={styles.PressableText}>
                  <Text style={styles.MainSelectText}>
                    Am responsble for ESG / carbon offset
                  </Text>
                </Pressable>
                <Pressable style={styles.PressableText}>
                  <Text style={styles.MainSelectText}>
                    Influence decision making on this topic
                  </Text>
                </Pressable>
                <Pressable style={styles.PressableText}>
                  <Text style={styles.MainSelectText}>
                    Am thinking about taking the next steps
                  </Text>
                </Pressable>
                <Pressable
                  style={[styles.PressableText, {borderBottomWidth: 0}]}>
                  <Text style={styles.MainSelectText}>Other</Text>
                </Pressable>
              </View>
              <Button
                isNormal
                onPress={() => navigation.navigate('TakeTour')}
                ButtonText={strings.Next}
                ButtonColor={'#A8C634'}
                TextColor={'#E5E5E5'}
                style={{marginTop: 40}}
              />
              <Button
                isNormal
                onPress={() => console.log('hello')}
                ButtonText={strings.Skip}
                TextColor={'#E5E5E5'}
                style={{
                  marginTop: 5,
                  shadowColor: '#0000',
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  shadowOpacity: 0,
                  shadowRadius: 0,

                  elevation: 0,
                }}
                // ButtonColor={'#201E21'}
              />
            </Container>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  CreatAccountStyle: {
    backgroundColor: '#313131',
    height: height * 1,
  },
  TopItem: {
    backgroundColor: '#313131',
  },
  SocialView: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  BottomView: {
    // flex: 0.5,
    paddingTop: 10,
    width: '100%',
  },
  DropDown: {
    marginTop: 10,
  },
  MainSelect: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 6,
    marginTop: 10,
  },
  MainSelectText: {
    fontSize: 18,
    fontFamily: 'Alata-Regular',
    color: '#434343',
  },
  PressableText: {
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingTop: 10,
  },
});
export default YouCarbon;
