import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';

// image import

function BackIcon(props) {
  const {navigation} = props;
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity
      onPress={handleBack}
      style={{
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        style={{objectFit: 'contain', width: '100%', height: '100%'}}
        source={require('../assets/backIcon.png')}
      />
    </TouchableOpacity>
  );
}

export default BackIcon;
