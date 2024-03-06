// libraries import
import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';

// image imports
import logo from '../../assets/logo.png';

function StartScreen({navigation}) {
  useEffect(() => {
    console.log('First screen loaded');
    const timer = setTimeout(() => {
      navigation.replace('OnBoarding');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image style={styles.logoImage} source={logo} />
    </View>
  );
}

export default StartScreen;

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  logoImage: {
    objectFit: 'contain',
    height: '100%',
    width: '100%',
  },
});
