import React from 'react';
import {Text, View} from 'react-native';
import ApplyForSchemeUI from '../../components/common/ApplyForScheme/ApplyForSchemeUI';

function ApplyForScheme({navigation}) {
  return (
    <View style={{flex: 1}}>
      <ApplyForSchemeUI navigation={navigation} />
    </View>
  );
}

export default ApplyForScheme;
