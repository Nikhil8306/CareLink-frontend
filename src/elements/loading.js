import React from 'react';
import {Image, View} from 'react-native';

import LottieView from 'lottie-react-native';

function loading() {
  return (
    <View
      style={{
        position: 'absolute',
        zIndex: 2,
        backgroundColor: 'transparent',
      }}>
      <LottieView
        source={require('../assets/animatedGifs/loader.json')}
        style={{width: 120, height: 120}}
        autoPlay
        loop
      />
    </View>
  );
}

export default loading;
