import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screen
import SignUp from '../screens/SignUp';
import CreatAccount from '../screens/CreatAccount';
import AccountDetails from '../screens/AccountDetails';
import Yourname from '../screens/Yourname';
import CompanyDetails from '../screens/CompanyDetails';
import CompanySize from '../screens/CompanySize';
import YouCarbon from '../screens/YouCarbon';
import TakeTour from '../screens/TakeTour';
import SignIn from '../screens/SignIn';
import Home from '../screens/Home';
import BottomTab from '../services/navigation/BottomTab';
import ExtraMenu from '../screens/ExtraMenu';
import DecarbonizerMission from '../screens/DecarbonizerMission';
import ContactUs from '../screens/ContactUs';
import HowDecarbonizerWorks from '../screens/howDecarbonizerWorks';
import Faq from '../screens/Faq';
import FundingStage from '../screens/FundingStage';
import ProjectDetails from '../screens/ProjectDetails';

const Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
        BottomTabBar: {
          visible: true,
        },
      }}
      initialRouteName="SignUp">
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="CreatAccount" component={CreatAccount} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AccountDetails" component={AccountDetails} />
      <Stack.Screen name="Yourname" component={Yourname} />
      <Stack.Screen name="CompanyDetails" component={CompanyDetails} />
      <Stack.Screen name="CompanySize" component={CompanySize} />
      <Stack.Screen name="YouCarbon" component={YouCarbon} />
      <Stack.Screen name="TakeTour" component={TakeTour} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="ExtraMenu" component={ExtraMenu} />
      <Stack.Screen
        name="DecarbonizerMission"
        component={DecarbonizerMission}
      />
      <Stack.Screen name="ContactUs" component={ContactUs} />
      <Stack.Screen
        name="HowDecarbonizerWorks"
        component={HowDecarbonizerWorks}
      />
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="Faq" component={Faq} />
      <Stack.Screen name="FundingStage" component={FundingStage} />
      <Stack.Screen name="ProjectDetails" component={ProjectDetails} />
    </Stack.Navigator>
  );
};

export default Routes;
