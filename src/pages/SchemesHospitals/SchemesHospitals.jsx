import React from 'react';
import {View} from 'react-native';
import SchemesHospitalsUI from '../../components/common/SchemesHospitals/SchemesHospitalsUI';

function SchemesHospitals({navigation}) {
  return (
    <View style={{flex: 1}}>
      <SchemesHospitalsUI navigation={navigation} />
    </View>
  );
}

export default SchemesHospitals;
