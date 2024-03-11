// importing libraries
import React from 'react';
import {View, Text} from 'react-native';

// importing components
import SearchUI from '../../components/common/Search/SearchUI';

function Search(props) {
  const {navigation} = props;
  return (
    <View style={{flexGrow: 1, backgroundColor: '#EBF9F5'}}>
      <SearchUI navigation={navigation} />
    </View>
  );
}

export default Search;
