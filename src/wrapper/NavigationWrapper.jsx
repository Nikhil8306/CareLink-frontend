// import libraries
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// importing components
import OnBoarding from '../pages/OnBoarding/OnBoarding';
import StartScreen from '../pages/StartScreen/StartScreen';
import MobileNumber from '../pages/LoginScreen/LoginScreen';

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
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="MobileNumber" component={MobileNumber} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationWrapper;
