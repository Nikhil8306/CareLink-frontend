import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

// importing component
import BackIcon from '../../../elements/BackIcon';
import profileIcon from '../../../assets/profileIcon.jpg';
import logoutIcon from '../../../assets/logoutIcon.jpg';
import settingsIcon from '../../../assets/settingsIcon.jpg';

function SettingsUI(props) {
  const {navigation} = props;

  const handleMyProfile = () => {
    navigation.navigate('MedicalHistory');
  };

  return (
    <View style={{flex: 1, backgroundColor: '#EBF9F5'}}>
      <View
        style={{
          backgroundColor: '#C5F8EC',
          width: 80,
          height: 80,
          borderRadius: 50,
          marginLeft: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <BackIcon navigation={navigation} />
      </View>

      <View
        style={{
          flex: 0.4,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          onPress={handleMyProfile}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            width: '90%',
            justifyContent: 'space-around',
          }}>
          <Image style={{width: 50, height: 50}} source={profileIcon} />
          <Text style={{color: 'black', fontSize: 18}}>My profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            width: '90%',
            justifyContent: 'space-around',
          }}>
          <Image style={{width: 50, height: 50}} source={settingsIcon} />
          <Text style={{color: 'black', fontSize: 18}}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            width: '90%',
            justifyContent: 'space-around',
          }}>
          <Image style={{width: 50, height: 50}} source={logoutIcon} />
          <Text style={{color: 'black', fontSize: 18}}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SettingsUI;
