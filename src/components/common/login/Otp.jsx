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

import LoadingAnimation from '../../../elements/loading.js';

// importing images
// import Logo from '../../../assets/logo.png';

import LottieView from 'lottie-react-native';

function Otp(props) {
  const {navigation, resendOtp, onPress, mobileNumber} = props;
  const [Otp, setOtp] = useState([useRef(), useRef(), useRef(), useRef()]);
  const screenHeight = Dimensions.get('screen').height;
  const [currentTime, setCurrentTime] = useState(60);
  const [timerVisible, setTimerVisible] = useState(true);

  const [isLoaderVisible, setIsLoaderVisible] = useState(false);

  // const handleInputChange = (value, index) => {
  //   if (value.length === 1 && index < 4) {
  //     if (index === 3) {
  //       console.log(Otp);
  //       onPress(Otp);
  //       // navigation.navigate('OnBoarding');
  //     } else if (index < 3) {
  //       Otp[index + 1].current.focus();
  //     }
  //   }
  // };
  const handleInputChange = (value, index) => {
    // Update the OTP value for the current input field
    const updatedOtp = [...Otp];
    updatedOtp[index].current._lastNativeText = value;
    setOtp(updatedOtp);

    // Concatenate all the OTP values to form the complete OTP
    const otpValues = updatedOtp
      .map(ref => ref.current._lastNativeText)
      .join('');

    console.log('OTP:', otpValues); // Log the OTP value

    if (value.length === 1) {
      if (index === 3) {
        // If last digit is entered
        onPress(otpValues, mobileNumber);
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

  const handleVerifyOtp = () => {
    onPress(Otp, mobileNumber);
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
            {isLoaderVisible && <LoadingAnimation />}
            {/* <Image
              style={{objectFit: 'contain', width: '50%', height: '40%'}}
              source={otpImage}
            /> */}
            <LottieView
              source={require('../../../assets/animatedGifs/otp.json')}
              style={{
                width: 250,
                height: 200,
                marginBottom: 20,
                marginLeft: 30,
              }}
              autoPlay
              loop
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
                      color: 'black',
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
              <NextButton text={'Verify'} onPress={handleVerifyOtp} />
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default Otp;
