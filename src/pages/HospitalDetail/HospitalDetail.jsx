import React from 'react';
import {Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';

// importing UI component
import HospitalDetailUI from '../../components/common/HospitalDetailUI/HospitalDetailUI';
import BackIcon from '../../elements/BackIcon';
import nurse from '../../assets/nurse.jpg';

function HospitalDetail(props) {
  const {navigation} = props;
  return (
    <View style={{flex: 1}}>
      <HospitalDetailUI navigation={navigation} />
    </View>
  );
}

export default HospitalDetail;
