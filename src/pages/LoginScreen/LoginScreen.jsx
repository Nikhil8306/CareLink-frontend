import React, {useEffect, useState} from 'react';
import {Alert, View} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

// importing components
import MobileNumber from '../../components/common/login/MobileNumber.jsx';
import Otp from '../../components/common/login/Otp.jsx';

// importing loader

function LoginScreen({navigation}) {
  const [isOtpSent, setIsOtpSent] = useState(false);

  const resendOtp = () => {
    console.log('resending the otp');
  };

  const verifyOtp = async otp => {
    navigation.replace('OnBoarding');

    // yahana otp verfication hoga
    // try {
    //   const response = await fetch('http://localhost:3000');
    //   if (response.status === 200) {
    //     const data = await response.json();
    //     const token = data.token;

    //     // Store token in AsyncStorage
    //     await AsyncStorage.setItem('JWTTOKEN', token);
    //     Alert.alert('Token saved');
    //   } else {
    //     console.error('Failed to fetch token. Status:', response.status);
    //   }
    // } catch (error) {
    //   console.error('Error fetching token:', error);
    // }
  };

  const handleSendOtp = async mobileNumber => {
    console.log('OTP sent');

    // const response = await fetch('http:localhost:3000');

    // Will write the api when backend is ready
    setTimeout(() => {
      console.log('Time over redirecting to otp');
      setIsOtpSent(true);
      // navigation.navigate('OtpScreen');
    }, 3000);

    // if (response.status === 200) {
    //   isOtpSent(true);
    // } else {
    //   console.log('Failed to recived OTP');
    // }
  };

  return (
    // some issue present ,need to ask komal bhaiya...

    <View style={{flex: 1}}>
      {isOtpSent ? (
        <Otp
          navigation={navigation}
          onPress={verifyOtp}
          // verifyOtp={verifyOtp}
          // resendOtp={resendOtp}
        />
      ) : (
        <MobileNumber navigation={navigation} onPress={handleSendOtp} />
      )}
    </View>
  );
}

export default LoginScreen;
