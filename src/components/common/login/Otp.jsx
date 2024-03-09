import React, {useEffect, useRef, useState} from 'react';
import {
  ScrollView,
  Text,
  Image,
  TextInput,
  View,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

// importing common function
import NextButton from '../../common/NextButton';

// importing common component
import BackIcon from '../../../elements/BackIcon';

// importing images
// import Logo from '../../../assets/logo.png';
import otpImage from '../../../assets/otpImage.png';

function Otp(props) {
  const {navigation, resendOtp, verifyOtp} = props;
  const [Otp, setOtp] = useState([useRef(), useRef(), useRef(), useRef()]);
  const screenHeight = Dimensions.get('screen').height;
  const [currentTime, setCurrentTime] = useState(60);
  const [timerVisible, setTimerVisible] = useState(true);

  const handleInputChange = (value, index) => {
    if (value.length === 1 && index < 4) {
      if (index === 3) {
        navigation.navigate('OnBoarding');
      } else if (index < 3) {
        Otp[index + 1].current.focus();
      }
    }
  };

  useEffect(() => {
    Otp[0].current.focus();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(prevTime => (prevTime === 0 ? 60 : prevTime - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleResendOtp = () => {
    resendOtp();
    setCurrentTime(60); // Reset timer
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View
            style={{
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              flexGrow: 1,
            }}>
            <Image
              style={{objectFit: 'contain', width: '50%', height: '40%'}}
              source={otpImage}
            />
            <Text style={{color: 'black', fontSize: 20}}>Enter the OTP</Text>
            <View
              style={{
                flexDirection: 'row',
                width: '60%',
                justifyContent: 'space-between',
              }}>
              {Otp.map((ref, index) => (
                <View key={index} style={{width: '20%', marginTop: 10}}>
                  <TextInput
                    placeholder="X"
                    placeholderTextColor={'black'}
                    ref={ref}
                    style={{
                      borderWidth: 1,
                      width: '100%',
                      textAlign: 'center',
                      fontSize: 20,
                    }}
                    maxLength={1}
                    onChangeText={text => handleInputChange(text, index)}
                  />
                </View>
              ))}
            </View>
            <View>
              {timerVisible ? (
                <Text style={{fontSize: 11, marginTop: 10}}>
                  You can resend OTP after {currentTime} seconds.
                </Text>
              ) : (
                <TouchableOpacity onPress={handleResendOtp}>
                  <Text>Resend</Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={{position: 'absolute', bottom: 20}}>
              <NextButton
                navigation={navigation}
                destination={'OnBoarding'}
                text={'Verify'}
                onPress={verifyOtp}
              />
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default Otp;
