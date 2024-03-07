import React from 'react';
import {Image, TouchableOpacity, View, Text} from 'react-native';

function NextButton(props) {
  const {destination} = props;
  const {navigation} = props;
  const {text} = props;

  const handleNext = () => {
    navigation.navigate(destination);
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
