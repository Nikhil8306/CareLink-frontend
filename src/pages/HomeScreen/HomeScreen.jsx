import React from 'react';
import {View} from 'react-native';
import HomeScreenUI from '../../components/common/home/HomeScreenUI';

function HomeScreen(props) {
  const {navigation} = props;
  const handleSearch = () => {
    console.log('Search button pressed');
    navigation.navigate('Search');
  };

  const handleAppointment = () => {
    console.log('Appointenemt booking screen');
  };

  const handleSettings = () => {
    console.log('Settings screen');
  };

  const handleHome = () => {
    console.log('HomeScreen');
  };
  return (
    <View style={{flex: 1}}>
      <HomeScreenUI
        handleAppointment={handleAppointment}
        handleSettings={handleSettings}
        handleHome={handleHome}
        handleSearch={handleSearch}
      />
    </View>
  );
}

export default HomeScreen;
