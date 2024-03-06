// App.js

import React, { useEffect } from 'react';
import { StatusBar, View } from 'react-native';

import NavigationWrapper from './src/wrapper/NavigationWrapper';

function App() {
  useEffect(() => {
    console.log("App started");
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={"black"} animated />
      <NavigationWrapper />
    </View>
  );
}

export default App;
