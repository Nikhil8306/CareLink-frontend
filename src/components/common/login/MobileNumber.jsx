import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  StyleSheet,
} from 'react-native';

// importing common function
import NextButton from '../../common/NextButton';
import LoadingAnimation from '../../../elements/loading.js';

// importing images

import LottieView from 'lottie-react-native';

function MobileNumber(props) {
  const [mobileNumber, setMobileNumber] = useState();

  const {navigation, onPress} = props;

  const [isLoaderVisible, setIsLoaderVisible] = useState(false);

  const handleSendOtp = () => {
    setIsLoaderVisible(true);
    onPress(mobileNumber);
  };

  return (
    <ScrollView style={{height: '100%'}} contentContainerStyle={{flexGrow: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={[
            styles.container,
            isLoaderVisible ? styles.loaderVisible : null,
          ]}>
          {isLoaderVisible && <LoadingAnimation />}

          {/* <Image style={styles.image} source={MobileNumberImage} /> */}

          <LottieView
            source={require('../../../assets/animatedGifs/mobileNumber.json')}
            style={{width: 253, height: 253}}
            autoPlay
            loop
          />
          <Text style={styles.title}>Enter your phone number</Text>
          <TextInput
            style={styles.input}
            placeholder="Mobile number here"
            placeholderTextColor="black"
            keyboardType="numeric"
            onChangeText={text => {
              setMobileNumber(text);
            }}
          />
          <Text style={styles.info}>
            We will send an OTP for verification to your number
          </Text>
          <NextButton onPress={handleSendOtp} text="Confirm" />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },

  loaderVisible: {
    pointerEvents: 'none',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#ACF2E0',
    borderRadius: 17,
    width: '70%',
    color: 'black',
    fontSize: 18,
    marginBottom: 20,
    paddingLeft: 18,
  },
  info: {
    fontSize: 11,
    marginBottom: 20,
    color: 'black',
  },
  button: {
    position: 'absolute',
    bottom: 0,
  },
});

export default MobileNumber;
