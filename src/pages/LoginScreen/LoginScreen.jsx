import React, {useEffect, useState} from 'react';
import {Alert, View} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

// importing components
import MobileNumber from '../../components/common/login/MobileNumber.jsx';
import Otp from '../../components/common/login/Otp.jsx';

// importing loader

function LoginScreen({navigation}) {
  const [isOtpSent, setIsOtpSent] = useState(false);

  const [mobileNumber, setMobileNumber] = useState();

  const resendOtp = () => {
    console.log('resending the otp');
  };

  const verifyOtp = async (otp, mobileNumber) => {
    console.log('Verfiying otp');
    console.log(otp, mobileNumber);
    const response = await fetch('http://192.168.104.246:3030/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Specify the content type of the request body
      },
      body: JSON.stringify({
        // Convert body to JSON string
        mobile: mobileNumber,
        otp: otp,
      }),
    });

    if (response.status === 200) {
      // const data = await response.json();
      const {accessToken, refreshToken} = response; // Assuming backend sends access token and refresh token
      console.log(response);
      console.log(response.accessToken);
      console.log(response.refreshToken);
      await AsyncStorage.setItem('accessToken', accessToken);
      await AsyncStorage.setItem('refreshToken', refreshToken);

      navigation.replace('OnBoarding');
    } else {
      console.error('error in verifying otp');
    }
    // navigation.replace('OnBoarding');
  };

  const handleSendOtp = async mobileNumber => {
    console.log('OTP sent');
    setMobileNumber(mobileNumber);

    const response = await fetch('http://192.168.104.246:3030/user/sendOTP', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Specify the content type of the request body
      },
      body: JSON.stringify({
        // Convert body to JSON string
        mobile: mobileNumber,
      }),
    });

    if (response.status === 200) {
      setIsOtpSent(true);
    } else {
      console.log(response.status);
      console.error('Error in sending OTP');
    }
  };

  return (
    // some issue present ,need to ask komal bhaiya...

    <View style={{flex: 1}}>
      {isOtpSent ? (
        <Otp
          navigation={navigation}
          onPress={verifyOtp}
          mobileNumber={mobileNumber}
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
