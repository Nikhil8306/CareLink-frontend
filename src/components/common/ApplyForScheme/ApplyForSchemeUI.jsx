import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';

// importing utility
import BackIcon from '../../../elements/BackIcon';

// importing image
import HeartIcon from '../../../assets/heartIcon.jpg';
import nurse from '../../../assets/nurse.jpg';
import experience from '../../../assets/experience.jpg';
import patients from '../../../assets/patients.jpg';
import reviewIcon from '../../../assets/review.jpg';

function ApplyForSchemeUI(props) {
  const {navigation, handleBookAppointment} = props;

  const handleApply = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={{flex: 1, flexGrow: 1, backgroundColor: '#97F3DD'}}>
      <Image style={{height: 400, objectFit: 'contain'}} source={nurse} />

      <Text
        style={{
          color: 'black',
          fontSize: 18,
          textAlign: 'center',
          // backgroundColor: 'red',
        }}>
        This covers a premium of 2 lakh ruppes for any kind of treatement.Along
        with treatment of family members...
      </Text>

      <View
        style={{
          // backgroundColor: 'red',
          height: 150,
          width: '100%',
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18, color: 'black'}}>4.8* rating</Text>
        <Text style={{fontSize: 18, color: 'black'}}>4.8* rating</Text>
        <Text style={{fontSize: 18, color: 'black'}}>4.8* rating</Text>
      </View>

      <TouchableOpacity
        onPress={handleApply}
        style={{
          backgroundColor: 'blue',
          height: 50,
          width: 130,
          position: 'absolute',
          left: 260,
          bottom: 0,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 20}}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ApplyForSchemeUI;
