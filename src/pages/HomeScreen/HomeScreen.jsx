import React from 'react';
import {View} from 'react-native';
import HomeScreenUI from '../../components/common/home/HomeScreenUI';

function HomeScreen(props) {
  const {navigation} = props;

  const handleDoctor = () => {
    console.log('Doctor pressed');
    navigation.navigate('DoctorDetail');
  };

  return (
    <View style={{flex: 1}}>
      <HomeScreenUI handleDoctor={handleDoctor} navigation={navigation} />
    </View>
  );
}

export default HomeScreen;
