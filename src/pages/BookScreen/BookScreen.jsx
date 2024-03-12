import React from 'react';
import {View} from 'react-native';

// importing UI component
import BookingScreenUI from '../../components/common/BookingScreen/BookingScreenUI';
function BookScreen(props) {
  const {navigation} = props;
  return (
    <View style={{flex: 1}}>
      <BookingScreenUI navigation={navigation} />
    </View>
  );
}

export default BookScreen;
