import React from 'react';
import {View, ScrollView, KeyboardAvoidingView, StyleSheet} from 'react-native';

// importing Ui components
import OnBoardingUI from '../../components/common/OnBoarding/OnBoardingUI';

// importing redux functinalities

import {useDispatch} from 'react-redux';

function OnBoarding({navigation}) {
  const handleFinish = (name, age, gender) => {
    console.log('Moving to the homepage');
    navigation.navigate('HomeScreen');
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
