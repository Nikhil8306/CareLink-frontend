import React from 'react';
import {Text, View} from 'react-native';
import BenifitsScreenUI from '../../components/common/Benifits/BenifitsScreenUI';

function BenifitsScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <BenifitsScreenUI navigation={navigation} />
    </View>
  );
}

export default BenifitsScreen;
