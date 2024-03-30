import React from 'react';
import {View} from 'react-native';
import SchemesHospitalsUI from '../../components/common/SchemesHospitals/SchemesHospitalsUI';

function SchemesHospitals({navigation, scheme_id}) {
  console.log(scheme_id);
  return (
    <View style={{flex: 1}}>
      <SchemesHospitalsUI scheme={scheme_id} navigation={navigation} />
    </View>
  );
}

export default SchemesHospitals;
