import React from 'react';
import {Text, View} from 'react-native';
import BenifitsScreenUI from '../../components/common/Benifits/BenifitsScreenUI';

function BenifitsScreen({route, navigation}) {
  const {name} = route.params;
  console.log(name);
  return (
    <View style={{flex: 1}}>
      <BenifitsScreenUI name={name} navigation={navigation} />
    </View>
  );
}

export default BenifitsScreen;
