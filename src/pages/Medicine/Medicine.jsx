import React from 'react';
import {View, Text} from 'react-native';

// importing UI component
import MedicineUI from '../../components/common/Medicine/MedicineUI';

function Medicine({navigation}) {
  return (
    <View style={{flex: 1}}>
      <MedicineUI navigation={navigation} />
    </View>
  );
}

export default Medicine;
