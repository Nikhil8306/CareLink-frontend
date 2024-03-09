// import libraries
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// importing components
import Features from '../pages/Features/Features';
import StartScreen from '../pages/StartScreen/StartScreen';
import MobileNumber from '../pages/LoginScreen/LoginScreen';
import Otp from '../components/common/login/Otp';
import OnBoarding from '../pages/OnBoarding/OnBoarding';
import HomeScreen from '../pages/HomeScreen/HomeScreen';

function NavigationWrapper(props) {
  const {navigationRef} = props;
  console.log(navigationRef);
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="StartScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="Features" component={Features} />
        <Stack.Screen name="MobileNumber" component={MobileNumber} />
        <Stack.Screen name="OtpScreen" component={Otp} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationWrapper;
