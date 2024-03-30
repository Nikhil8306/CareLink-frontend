import React from 'react';
import {View, ScrollView, KeyboardAvoidingView, StyleSheet} from 'react-native';

// importing Ui components
import OnBoardingUI from '../../components/common/OnBoarding/OnBoardingUI';

// importing redux functinalities

import {useDispatch} from 'react-redux';

// import AsyncStorage from '@react-native-async-storage/async-storage';

function OnBoarding({navigation}) {
  const handleFinish = async (
    name,
    age,
    gender,
    address,
    state,
    BPL,
    aadhaar,
  ) => {
    console.log('Moving to the homepage');
    console.log(name);
    console.log(age);
    console.log(gender);
    console.log(state);
    console.log(BPL);

    console.log('tokens are ', AsyncStorage.getItem('accessToken'));
    console.log('tokens are ', AsyncStorage.getItem('refreshToken'));

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `${accessToken}`,
      'Refresh-Token': refreshToken,
    };

    const response = await fetch(
      'http://192.168.104.246:3030/user/updateProfile',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Specify the content type of the request body
          headers: headers,
        },
        body: JSON.stringify({
          // Convert body to JSON string
          age,
          name,
          address,
          BPL,
          aadhaar,
          state,
          gender,
        }),
      },
    );

    console.log(response);

    if (response.status === 200) {
      navigation.replace('HomeScreen');
    } else {
      console.error('Error in updating profile');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="20">
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <OnBoardingUI onPress={handleFinish} navigation={navigation} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default OnBoarding;
