import React, {useEffect, useRef, useState} from 'react';
import {
  ScrollView,
  Text,
  Image,
  TextInput,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

// importing common function
import NextButton from '../../common/NextButton';

// importing common component
import BackIcon from '../../../elements/BackIcon';

// importing images
import Logo from '../../../assets/logo.png';

function Otp(props) {
  const {navigation, resendOtp} = props;
  const [Otp, setOtp] = useState([useRef(), useRef(), useRef(), useRef()]);

  const enteredOtp = [];
  const screenHeight = Dimensions.get('screen').height;

  const [currentTime, setCurrentTime] = useState(60);
  const [timerVisible, setTimerVisible] = useState(true);

  const handleInputChange = (value, index) => {
    if (value.length === 1 && index < 4) {
      if (index == 3) {
        enteredOtp[index] = value;
        navigation.navigate('OnBoarding');
        console.log(enteredOtp);
      } else if (index < 3) {
        enteredOtp[index] = value;
        Otp[index + 1].current.focus();
      }
    }
  };

  useEffect(() => {
    Otp[0].current.focus();
  }, []);

  useEffect(() => {
    if (currentTime < 1) {
      setTimerVisible(false);
    } else {
      const clearTimeOut = setTimeout(() => {
        setCurrentTime(currentTime - 1);
      }, 1000);
    }
  }, [currentTime]);

  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: 'white',
          alignItems: 'center',
          height: screenHeight,
          width: '100%',
          justifyContent: 'center',
        }}>
        <View style={{position: 'absolute', top: 0, left: 0}}>
          <BackIcon navigation={navigation} />
        </View>
        <Image
          style={{
            objectFit: 'contain',
            width: '50%',
            height: '40%',
          }}
          source={Logo}
        />
        <Text
          style={{
            color: 'black',
            fontSize: 20,
          }}>
          Enter the OTP
        </Text>

        <View
          style={{
            flexDirection: 'row',
            width: '60%',
            justifyContent: 'space-between',
          }}>
          {Otp.map((ref, index) => (
            <View key={index} style={{width: '20%'}}>
              <TextInput
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
            <>
              <Text style={{fontSize: 11}}>
                You can resend OTP after {currentTime} seconds.
              </Text>
            </>
          ) : (
            <TouchableOpacity onPress={resendOtp}>
              <Text>Resend</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={{position: 'absolute', bottom: 50}}>
          <NextButton
            navigation={navigation}
            destination={'Home'}
            text={'Verify'}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default Otp;
