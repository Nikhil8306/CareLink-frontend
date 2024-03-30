import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';

function BenifitsScreenUI({navigation}) {
  const [schemes, setSchemes] = useState([
    {first: 'one'},
    {first: 'one'},
    {first: 'one'},
    {first: 'one'},
    {first: 'one'},
    {first: 'one'},
    {first: 'one'},
    {first: 'one'},
    {first: 'one'},
    {first: 'one'},
    {first: 'one'},
    {first: 'one'},
  ]);

  const handleScheme = () => {
    navigation.navigate('SchemesHospitals');
  };

  return (
    <View style={{flexGrow: 1}}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
          textAlign: 'center',
          marginBottom: 10,
        }}>
        Your schemes
      </Text>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        {schemes.map((element, index) => (
          <TouchableOpacity
            onPress={handleScheme}
            key={index}
            style={{
              backgroundColor: '#97F3DD',
              height: 100,
              width: '90%',
              alignSelf: 'center',
              borderRadius: 20,
              justifyContent: 'center',
              marginBottom: 20,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: 'black',
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Ayushman bharan yojna
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

export default BenifitsScreenUI;
