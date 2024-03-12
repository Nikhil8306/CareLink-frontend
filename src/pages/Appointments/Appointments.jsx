import React from 'react';
import {View} from 'react-native';
import AppointmentsUI from '../../components/common/Appointments/AppointmentsUI';

function Appointments({navigation}) {
  return (
    <View style={{flex: 1}}>
      <AppointmentsUI navigation={navigation} />
    </View>
  );
}

export default Appointments;
