import React from 'react';
import {Image, TouchableOpacity, View, Text} from 'react-native';

function NextButton(props) {
  const {destination} = props;
  const {navigation} = props;
  const {text} = props;
  const {mobileNumber} = props;
  const handleNext = async () => {
    navigation.navigate(destination);
    // if (destination === 'OtpScreen') {
    //   console.log(mobileNumber);
    //   const response = await fetch('http://192.168.64.246:3000/user/register', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       mobile: mobileNumber,
    //     }),
    //   });

    //   if (response.status === 200) {
    //     navigation.navigate(destination);
    //   }
    // } else {
    // }
  };
  return (
    <View>
      <TouchableOpacity
        onPress={handleNext}
        style={{
          backgroundColor: '#8BF2D9',
          minHeight: 50,
          maxWidth: 200,
          minWidth: 100,
          borderRadius: 18,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 18,
            paddingLeft: 15,
            paddingRight: 15,
          }}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default NextButton;
