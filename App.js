import {View, Text} from 'react-native';
import React from 'react';
// navigation
import {navigationRef} from './src/services/navigation/RootNavigation';
import {NavigationContainer} from '@react-navigation/native';
// routes
import Routes from './src/routes/routes';
import MyTabs from './src/services/navigation/BottomTab';

function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Routes />
      {/* <MyTabs /> */}
    </NavigationContainer>
  );
}

export default App;
