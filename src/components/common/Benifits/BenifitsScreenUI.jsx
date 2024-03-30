import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';

function BenifitsScreenUI(props) {
  const {navigation, name} = props;

  const [schemesName, setSchemesName] = useState(name);

  const handleScheme = scheme_id => {
    console.log(scheme_id);
    navigation.navigate('SchemesHospitals', {scheme: scheme_id});
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
          padding: 10,
        }}>
        Your schemes
      </Text>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        {schemesName.map((scheme, index) => (
          <TouchableOpacity
            onPress={() => {
              handleScheme(scheme._id);
            }}
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
              {scheme.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

export default BenifitsScreenUI;
