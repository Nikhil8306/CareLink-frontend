import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {Agenda} from 'react-native-calendars';

import medicineImage from '../../../assets/medicineImage.jpg';

function MedicineUI(props) {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().slice(0, 10),
  ); // Current date in 'YYYY-MM-DD' format

  const medicines = [
    {name: 'Medicine 1', time: '9:00 AM'},
    {name: 'Medicine 2', time: '11:00 AM'},
    {name: 'Medicine 3', time: '2:00 PM'},
    {name: 'Medicine 1', time: '9:00 AM'},
    {name: 'Medicine 2', time: '11:00 AM'},
    {name: 'Medicine 3', time: '2:00 PM'},
    {name: 'Medicine 1', time: '9:00 AM'},
    {name: 'Medicine 2', time: '11:00 AM'},
    {name: 'Medicine 3', time: '2:00 PM'},
    {name: 'Medicine 1', time: '9:00 AM'},
    {name: 'Medicine 2', time: '11:00 AM'},
    {name: 'Medicine 3', time: '2:00 PM'},
    // Add more medicines as needed
  ];

  // Generate items for the current week
  const items = {};
  const currentDate = new Date();
  const todayDateString = currentDate.toISOString().slice(0, 10);
  items[todayDateString] = medicines;

  return (
    <View style={{flexGrow: 1}}>
      <Agenda
        hideKnob={true}
        selected={selectedDate}
        items={items}
        renderItem={item => (
          <View
            // key={index}
            style={{
              maxHeight: 130,
              height: 90,
              backgroundColor: 'yellow',
              width: '97%',
              alignSelf: 'center',
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginBottom: 10,
            }}>
            <View
              style={{
                width: '20%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Image
                style={{objectFit: 'contain', height: '100%', width: '100%'}}
                source={medicineImage}
              />
            </View>

            <View
              style={{
                width: '80%',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                Paracetamol
              </Text>
              <View
                style={{
                  width: '80%',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <Text style={{color: 'black'}}>1:00 PM</Text>
                <Text style={{color: 'black'}}>2 Capsule</Text>
              </View>
            </View>
          </View>
        )}
        onDayPress={day => {
          setSelectedDate(day.dateString);
        }}
      />
    </View>
  );
}

export default MedicineUI;

{
  /* {medicines.map((medicine, index) => (
        <View
          key={index}
          style={{
            maxHeight: 130,
            height: 90,
            backgroundColor: 'yellow',
            width: '97%',
            alignSelf: 'center',
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 10,
          }}>
          <View
            style={{
              width: '20%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Image
              style={{objectFit: 'contain', height: '100%', width: '100%'}}
              source={medicineImage}
            />
          </View>

          <View
            style={{
              width: '80%',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
              Paracetamol
            </Text>
            <View
              style={{
                width: '80%',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <Text style={{color: 'black'}}>1:00 PM</Text>
              <Text style={{color: 'black'}}>2 Capsule</Text>
            </View>
          </View>
        </View>
      ))} */
}
