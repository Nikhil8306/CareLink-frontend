// importing libraries
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

// importing images for the container
import homeImage from '../../../../assets/home.jpg';
import settingsImage from '../../../../assets/settings.jpg';
import searchImage from '../../../../assets/search.jpg';
import appointmentImage from '../../../../assets/appointment.jpg';
import medicineIcon from '../../../../assets/medicineIcon.jpg';
import benefitsImage from '../../../../assets/benefitsImage.jpg';

function BottomNavigator(props) {
  const {navigation} = props;

  const handleSearch = () => {
    navigation.navigate('Search');
  };
  const handleHome = () => {
    navigation.navigate('HomeScreen');
  };
  const handleSettings = () => {
    console.log('Handle Search presed');
    navigation.navigate('Settings');
  };
  const handleAppointment = () => {
    console.log('Handle Search presed');
    navigation.navigate('Appointments');
  };

  const handleMedicine = () => {
    console.log('Handle Medicine pressed');
    navigation.navigate('Medicine');
  };

  const handleBenifits = async () => {
    console.log('benefits screen ');

    const response = await fetch('http://192.168.104.246:3030/user/getScheme', {
      method: 'GET',
    });

    const name = (await response.json()).data;
    navigation.navigate('Benifits', {name: name});
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
      <TouchableOpacity
        onPress={handleHome}
        style={{flex: 0.2, justifyContent: 'center'}}>
        <Image
          style={{width: '90%', height: '60%', objectFit: 'contain'}}
          source={homeImage}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleSearch}
        style={{flex: 0.21, justifyContent: 'center'}}>
        <Image
          style={{
            width: '90%',
            height: '60%',
            objectFit: 'contain',
          }}
          source={searchImage}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleMedicine}
        style={{flex: 0.21, justifyContent: 'center'}}>
        <Image
          style={{width: '90%', height: '60%', objectFit: 'contain'}}
          source={medicineIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleAppointment}
        style={{flex: 0.21, justifyContent: 'center'}}>
        <Image
          style={{width: '90%', height: '60%', objectFit: 'contain'}}
          source={appointmentImage}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleBenifits}
        style={{flex: 0.21, justifyContent: 'center'}}>
        <Image
          style={{width: '90%', height: '60%', objectFit: 'contain'}}
          source={benefitsImage}
        />
      </TouchableOpacity>
    </View>
  );
}

export default BottomNavigator;
