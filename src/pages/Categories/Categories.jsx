import React from 'react';
import {View} from 'react-native';

import CategoryUI from '../../components/common/Category/CategoryUI';

function Categories(props) {
  const {navigation} = props;
  return (
    <View style={{flex: 1}}>
      <CategoryUI navigation={navigation} />
    </View>
  );
}

export default Categories;
