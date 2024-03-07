import React, {useState} from 'react';
import {View} from 'react-native';

// importing components
import MobileNumber from '../../components/common/login/MobileNumber';
import Otp from '../../components/common/login/Otp';

function LoginScreen({navigation}) {
  const [isOtpSent, setIsOtpSent] = useState(false);

  const resendOtp = () => {
    console.log('resending the otp');
  };

  const verifyOtp = () => {
    navigation.replace('Home');
  };

  return (
    <View>
      {isOtpSent ? (
        <Otp navigation={navigation} resendOtp={resendOtp} />
      ) : (
        <MobileNumber navigation={navigation} />
      )}
    </View>
  );
}

export default LoginScreen;
