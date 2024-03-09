import React from 'react';
import {View, Text, ScrollView} from 'react-native';

// importing HomeScreen Ui
import HomeScreenUI from '../../components/common/home/HomeScreenUI';

function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <HomeScreenUI />
    </ScrollView>
  );
}

export default HomeScreen;
