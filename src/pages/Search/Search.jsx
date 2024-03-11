// importing libraries
import React from 'react';
import {View, Text} from 'react-native';

// importing components
import SearchUI from '../../components/common/Search/SearchUI';

function Search() {
  return (
    <View style={{flexGrow: 1, backgroundColor: '#EBF9F5'}}>
      <SearchUI />
    </View>
  );
}

export default Search;
