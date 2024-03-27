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
import Search from '../pages/Search/Search';
import Appointments from '../pages/Appointments/Appointments';
import Settings from '../pages/Settings/Settings';
import DoctorDetail from '../pages/DoctorDetail/DoctorDetail';
import BookScreen from '../pages/BookScreen/BookScreen';
import Categories from '../pages/Categories/Categories';
import HospitalDetail from '../pages/HospitalDetail/HospitalDetail';
import LoginScreen from '../pages/LoginScreen/LoginScreen';

// importing redux tools
import {useSelector} from 'react-redux';

// importing common functions
import {isOnBoardingRequired, isLoginRequired} from '../utils/commonFunctions';
import Medicine from '../pages/Medicine/Medicine';

function NavigationWrapper(props) {
  const {navigationRef} = props;

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="StartScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="Features" component={Features} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="OtpScreen" component={Otp} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Appointments" component={Appointments} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="DoctorDetail" component={DoctorDetail} />

        <Stack.Screen name="BookingScreen" component={BookScreen} />

        <Stack.Screen name="CategoryScreen" component={Categories} />

        <Stack.Screen name="HospitalDetail" component={HospitalDetail} />
        <Stack.Screen name="Medicine" component={Medicine} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationWrapper;
