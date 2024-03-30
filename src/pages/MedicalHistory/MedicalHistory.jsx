import React from 'react';
import {View, Text} from 'react-native';
import MedicalHistoryUI from '../../components/common/MedicalHistory/MedicalHistoryUI';

function MedicalHistory({navigation}) {
  return (
    <View style={{flex: 1}}>
      <MedicalHistoryUI navigation={navigation} />
    </View>
  );
}

export default MedicalHistory;
