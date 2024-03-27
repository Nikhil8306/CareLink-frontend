import React from 'react';
import {View} from 'react-native';
import HomeScreenUI from '../../components/common/home/HomeScreenUI';

// importing use selectior from redux
import {useSelector} from 'react-redux';

function HomeScreen(props) {
  const {navigation} = props;

  const handleDoctor = () => {
    console.log('Doctor pressed');
    navigation.navigate('DoctorDetail');
  };

  const handleCategory = () => {
    console.log('Showing category screen');
    navigation.navigate('CategoryScreen');
  };

  const handleHospital = () => {
    console.log('Showing hospital details');
    navigation.navigate('HospitalDetail');
  };

  return (
    <View style={{flex: 1}}>
      <HomeScreenUI
        handleHospital={handleHospital}
        handleCategory={handleCategory}
        handleDoctor={handleDoctor}
        navigation={navigation}
      />
    </View>
  );
}

export default HomeScreen;
