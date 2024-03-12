import React from 'react';
import {Text, View} from 'react-native';

// importing components
import DoctorDetailUI from '../../components/common/DoctorDetail/DoctorDetailUI';

function DoctorDetail(props) {
  const {navigation} = props;
  const handleBookAppointment = () => {
    console.log('Book appointment scree');
    navigation.navigate('BookingScreen');
  };
  return (
    <View style={{flex: 1}}>
      <DoctorDetailUI
        navigation={navigation}
        handleBookAppointment={handleBookAppointment}
      />
    </View>
  );
}

export default DoctorDetail;
