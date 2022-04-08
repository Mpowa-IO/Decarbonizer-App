import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as yup from 'yup';
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

const AccountDetails = ({navigation}) => {
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
    <KeyboardAwareScrollView style={styles.CreatAccountStyle}>
      <View
        style={{
          alignItems: 'center',
          height: height * 0.95,
          backgroundColor: '#201E21',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.TopItem}>
          <View>
            <Breadcrumbs
              BreadText={strings.AccountDetails}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={styles.SocialView}>
            <Container isPadding>
              <InfoLabel Info={strings.Thanks} />
            </Container>
          </View>
        </View>
        <ScrollView style={{width: '100%'}}>
          <View style={styles.BottomView}>
            <Formik
              validationSchema={loginValidationSchema}
              initialValues={{email: '', password: '', Cpassword: ''}}
              onSubmit={values => console.log(values)}>
              {({handleChange, handleBlur, handleSubmit, values, errors}) => (
                <Container isPadding>
                  <TextInput
                    isLabel
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    placeholder={strings.emailPlaceholder}
                    placeholderTextColor={'rgba(196, 196, 196, 0.54)'}
                    Label={strings.email}
                    color={'#FFFFFF'}
                    isInput
                  />
                  <TextInput
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    placeholder={strings.VerifyEmail}
                    placeholderTextColor={'rgba(196, 196, 196, 0.54)'}
                    color={'#FFFFFF'}
                    style={{marginTop: 20}}
                    isInput
                  />
                  <TextInput
                    onChangeText={handleChange('Cpassword')}
                    onBlur={handleBlur('Cpassword')}
                    value={values.Cpassword}
                    placeholder={strings.Password}
                    placeholderTextColor={'rgba(196, 196, 196, 0.54)'}
                    color={'#FFFFFF'}
                    style={{marginTop: 20}}
                    isPassword
                    isInput
                  />
                  <Text
                    style={{
                      color: '#D1D1D6',
                      fontFamily: 'Alata-Regular',
                      paddingTop: 5,
                      paddingBottom: 5,
                    }}>
                    Your password should have minimum of 6 characters, one
                    capital letter, one number, and one special character.
                  </Text>
                  {/* {errors.email && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.email}
                    </Text>
                  )} */}
                  <Button
                    isNormal
                    onPress={() => navigation.navigate('Yourname')}
                    ButtonText={strings.Next}
                    ButtonColor={'#A8C634'}
                    TextColor={'#E5E5E5'}
                    style={{marginTop: 20}}
                  />
                </Container>
              )}
            </Formik>
          </View>
        </ScrollView>
      </View>
    </KeyboardAwareScrollView>
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
    paddingTop: 30,
  },
});
export default AccountDetails;
