import React, {useMemo, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

// import
import BackIcon from '../../../elements/BackIcon';
import CustomInput from '../../../elements/CustomInput';

function BookingScreenUI(props) {
  const {navigation} = props;

  const radioButtons = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Debit Card',
        value: 'Debit',
      },
      {
        id: '2',
        label: 'UPI',
        value: 'UPI',
      },
      {
        id: '3',
        label: 'Credit Card',
        value: 'Credit',
      },
    ],
    [],
  );

  const [selectedId, setSelectedId] = useState();

  return (
    <View style={{flex: 1, backgroundColor: '#EBF9F5'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignItems: 'center',
        }}>
        <View style={{backgroundColor: '#FFFFFF', borderRadius: 50}}>
          <BackIcon navigation={navigation} />
        </View>
        <Text style={{fontSize: 19, color: 'black'}}>Appointment Details</Text>
      </View>

      <View style={{alignItems: 'center', marginTop: 15}}>
        <CustomInput toEnter="Patient Name" />
        <CustomInput toEnter="Age" />
        <CustomInput toEnter="Address" />
        <CustomInput toEnter="Gender" />
      </View>

      <View style={{width: '90%', alignSelf: 'center'}}>
        <Text style={{color: 'black', fontSize: 24}}>Payment</Text>

        <View style={{flexDirection: 'row'}}>
          <RadioGroup
            containerStyle={{flexDirection: 'row'}}
            radioButtons={radioButtons}
            onPress={setSelectedId}
            selectedId={selectedId}
          />
        </View>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: '#8BF2D9',
          height: 50,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 10,
          right: 10,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 17,
            padding: 5,
            fontWeight: 'bold',
          }}>
          Procced to Pay
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default BookingScreenUI;
