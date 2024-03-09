import React from 'react';
import {View, ScrollView, KeyboardAvoidingView, StyleSheet} from 'react-native';

// importing Ui components
import OnBoardingUI from '../../components/common/OnBoarding/OnBoardingUI';

function OnBoarding({navigation}) {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="20">
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <OnBoardingUI navigation={navigation} />
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
