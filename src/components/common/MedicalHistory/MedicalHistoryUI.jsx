import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

function MedicalHistoryUI({navigation}) {
  const [userHistory, setUserHistory] = useState([
    {doctorName: 'nikhil', date: '19/19/19'},
    {doctorName: 'nikhil', date: '19/19/19'},
    {doctorName: 'nikhil', date: '19/19/19'},
    {doctorName: 'nikhil', date: '19/19/19'},
    {doctorName: 'nikhil', date: '19/19/19'},
    {doctorName: 'nikhil', date: '19/19/19'},
    {doctorName: 'nikhil', date: '19/19/19'},
    {doctorName: 'nikhil', date: '19/19/19'},
    {doctorName: 'nikhil', date: '19/19/19'},
    {doctorName: 'nikhil', date: '19/19/19'},
    {doctorName: 'nikhil', date: '19/19/19'},
  ]);

  const handleHistoryButton = () => {
    navigation.navigate('HistoryDetail');
  };

  return (
    <View style={{flex: 1}}>
      <View>
        <Text style={{fontSize: 22, fontWeight: 'bold'}}>My History</Text>
      </View>

      <ScrollView
        contentContainerStyle={{
          //   flex: 1,
          flexGrow: 1,
          backgroundColor: 'yellow',
        }}>
        {userHistory.map((element, index) => (
          <TouchableOpacity
            onPress={handleHistoryButton}
            key={index}
            style={{
              height: 100,
              width: '95%',
              backgroundColor: 'green',
              alignSelf: 'center',
              borderRadius: 20,
              marginBottom: 10,
              justifyContent: 'space-around',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 22, color: 'black'}}>Dr. Nikhil</Text>
            <Text style={{fontSize: 22, color: 'black'}}>
              Prescribed on 19/19/19
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

export default MedicalHistoryUI;
