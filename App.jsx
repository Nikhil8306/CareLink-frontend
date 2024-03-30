// App.js

import React, {useEffect} from 'react';
import {StatusBar, View, PermissionsAndroid} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import NavigationWrapper from './src/wrapper/NavigationWrapper';

// importing location libraries
import Geolocation from 'react-native-geolocation-service';

// importing notifications
import messaging from '@react-native-firebase/messaging';

import AsyncStorage from '@react-native-async-storage/async-storage';

function App() {
  useEffect(() => {
    console.log('App started');

    getLocation();
    savingToken();
    requestUserPermission();
    getToken();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Can we access your location?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log('granted', granted);
      if (granted === 'granted') {
        console.log('You can use Geolocation');
        return true;
      } else {
        console.log('You cannot use Geolocation');
        return false;
      }
    } catch (err) {
      return false;
    }
  };

  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      console.log('res is:', res);
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            console.log(position);
          },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    });
  };

  const savingToken = async () => {
    await AsyncStorage.setItem(
      'accessToken',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjA3ZDQ5NzI5Y2E0MTBmZjJiNDFmMzQiLCJpYXQiOjE3MTE3ODk1MjEsImV4cCI6MTcxMTc5MzEyMX0.vYSCuVBP62skB2ozACadp0MOY_HYAxiWPrkAt04opCY',
    );

    console.log('Done ');
  };

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  const getToken = async () => {
    const token = await messaging().getToken();
    console.log('Token ', token);
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <StatusBar backgroundColor={'black'} animated />
        <NavigationWrapper />
      </View>
    </GestureHandlerRootView>
  );
}

export default App;
