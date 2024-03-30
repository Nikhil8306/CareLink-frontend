// import libraries
import React, {useEffect, useState} from 'react';
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
import MedicalHistory from '../pages/MedicalHistory/MedicalHistory';
import HistoryDetail from '../pages/HistoryDetail/HistoryDetail';
import BenifitsScreen from '../pages/BenifitsScreen/BenifitsScreen';
import SchemesHospitals from '../pages/SchemesHospitals/SchemesHospitals';
import ApplyForScheme from '../pages/ApplyForScheme/ApplyForScheme';

import AsyncStorage from '@react-native-async-storage/async-storage';

function NavigationWrapper(props) {
  const {navigationRef} = props;
  const [initialRoute, setInitialRoute] = useState('HomeScreen');

  const Stack = createNativeStackNavigator();

  const gettingToken = async () => {
    const authorization = await AsyncStorage.getItem('accessToken');
    console.log('got token', authorization);
    const isValidToken = await fetch(
      'http://192.168.104.246:3030/user/verify',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json', // Specify the content type of the request body
          authorization: authorization,
        },
      },
    );
    if (isValidToken.status === 200) {
      console.log('token verified');
      setInitialRoute('HomeScreen');
    } else {
      console.log('Not verified');
      setInitialRoute('StartScreen');
    }
  };

  useEffect(() => {
    const verifyToken = async () => {
      await gettingToken();
    };
    verifyToken();
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={initialRoute}
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
        <Stack.Screen name="MedicalHistory" component={MedicalHistory} />
        <Stack.Screen name="HistoryDetail" component={HistoryDetail} />
        <Stack.Screen name="Benifits" component={BenifitsScreen} />
        <Stack.Screen name="SchemesHospitals" component={SchemesHospitals} />
        <Stack.Screen name="ApplyForScheme" component={ApplyForScheme} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationWrapper;
