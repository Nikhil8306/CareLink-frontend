import React from 'react';
import {Image, View} from 'react-native';

function loading() {
  return (
    <View
      style={{
        position: 'absolute',
        zIndex: 2,
        backgroundColor: 'transparent',
      }}>
      <Image
        source={require('../assets/loadingAnimation.gif')}
        style={{width: 180, height: 180}}
      />
    </View>
  );
}

export default loading;
