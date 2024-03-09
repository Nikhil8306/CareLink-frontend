// App.js

import React, { useEffect } from 'react';
import { StatusBar, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import NavigationWrapper from './src/wrapper/NavigationWrapper';

function App() {
  useEffect(() => {
    console.log("App started");
  }, []);

  return (
    <GestureHandlerRootView style={{flex:1}}>

    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={"black"} animated />
      <NavigationWrapper />
    </View>
    </GestureHandlerRootView>
  );
}

export default App;
