// importing libraries
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

// importing images for the container
import homeImage from '../../../../assets/home.jpg';
import settingsImage from '../../../../assets/settings.jpg';
import searchImage from '../../../../assets/search.jpg';
import appointmentImage from '../../../../assets/appointment.jpg';

function BottomNavigator(props) {
  // const {handleSearch, handleHome, handleSettings, handleAppointment} = props;

  const {navigation} = props;

  const handleSearch = () => {
    navigation.navigate('Search');
  };
  const handleHome = () => {
    navigation.navigate('HomeScreen');
  };
  const handleSettings = () => {
    console.log('Handle Search presed');
  };
  const handleAppointment = () => {
    console.log('Handle Search presed');
    navigation.navigate('Appointment');
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
      <TouchableOpacity onPress={handleHome} style={{flex: 0.2}}>
        <Image
          style={{width: '90%', height: '90%', objectFit: 'contain'}}
          source={homeImage}
        />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSearch} style={{flex: 0.21}}>
        <Image
          style={{width: '90%', height: '90%', objectFit: 'contain'}}
          source={searchImage}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAppointment} style={{flex: 0.21}}>
        <Image
          style={{width: '90%', height: '90%', objectFit: 'contain'}}
          source={appointmentImage}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSettings} style={{flex: 0.21}}>
        <Image
          style={{width: '90%', height: '90%', objectFit: 'contain'}}
          source={settingsImage}
        />
      </TouchableOpacity>
    </View>
  );
}

export default BottomNavigator;
