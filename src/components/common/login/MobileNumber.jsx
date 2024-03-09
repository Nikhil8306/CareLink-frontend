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

// importing images
import MobileNumberImage from '../../../assets/mobileNumber.png';

function MobileNumber({navigation}) {
  const [mobileNumber, setMobileNumber] = useState();
  const handleNextPress = () => {
    // Handle navigation to the next screen
  };

  return (
    <ScrollView style={{height: '100%'}} contentContainerStyle={{flexGrow: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Image style={styles.image} source={MobileNumberImage} />
          <Text style={styles.title}>Enter your phone number</Text>
          <TextInput
            style={styles.input}
            placeholder="Mobile number here"
            placeholderTextColor="black"
            keyboardType="numeric"
            onChangeText={text => {
              // console.log(mobileNumber);
              setMobileNumber(text);
            }}
          />
          <Text style={styles.info}>
            We will send an OTP for verification to your number
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleNextPress}>
            <NextButton
              text="Confirm"
              navigation={navigation}
              destination={'OtpScreen'}
              mobileNumber={mobileNumber}
            />
          </TouchableOpacity>
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
