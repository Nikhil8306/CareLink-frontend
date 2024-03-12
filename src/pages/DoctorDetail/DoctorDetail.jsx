import React from 'react';
import {Text, View} from 'react-native';

// importing components
import DoctorDetailUI from '../../components/common/DoctorDetail/DoctorDetailUI';

function DoctorDetail(props) {
  const {navigation} = props;
  return (
    <View style={{flex: 1}}>
      <DoctorDetailUI navigation={navigation} />
    </View>
  );
}

export default DoctorDetail;
