import React from 'react';
import {Text, View} from 'react-native';

// importing UI components
import SettingsUI from '../../components/common/Settings/SettingsUI';

function Settings(props) {
  const {navigation} = props;
  return (
    <View style={{flex: 1}}>
      <SettingsUI navigation={navigation} />
    </View>
  );
}

export default Settings;
