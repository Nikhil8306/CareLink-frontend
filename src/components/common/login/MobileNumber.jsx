import React from 'react';
import {
  ScrollView,
  Text,
  Image,
  TextInput,
  View,
  Dimensions,
} from 'react-native';

// importing common function
import NextButton from '../../common/NextButton';

// importing images
import Logo from '../../../assets/logo.png';

function MobileNumber(props) {
  const {navigation} = props;
  const screenHeight = Dimensions.get('screen').height;
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
          Enter your phone number
        </Text>
        <TextInput
          style={{
            backgroundColor: '#ACF2E0',
            borderRadius: 15,
            width: '70%',
            color: 'black',
            fontSize: 18,
            marginTop: 20,
            marginBottom: 20,
          }}
          placeholder="Mobile number here"
          placeholderTextColor={'black'}
          keyboardType="numeric"
        />

        <Text style={{fontSize: 11}}>
          We will send an OTP for verificationto your number
        </Text>

        <View style={{position: 'absolute', bottom: 50}}>
          <NextButton
            navigation={navigation}
            destination={'OtpScreen'}
            text={'Confirm'}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default MobileNumber;
