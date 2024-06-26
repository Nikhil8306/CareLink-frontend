import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import BottomNavigator from '../login/BottomNavigator/BottomNavigator';

// importing images
import profileImage from '../../../assets/profile.jpg';

function AppointmentsUI(props) {
  const {navigation} = props;

  const [isSearchVisible, setSearchVisible] = useState(false);

  const handleSearchButton = () => {
    setSearchVisible(!isSearchVisible);
  };

  const [upcomingAppointments, setUpcomingAppointments] = useState([
    {name: 'Nikhil'},
    {name: 'Nikhil'},
    {name: 'Nikhil'},
    {name: 'Nikhil'},
    {name: 'Nikhil'},
    {name: 'Nikhil'},
    {name: 'Nikhil'},
    {name: 'Nikhil'},
    {name: 'Nikhil'},
    {name: 'Nikhil'},
    {name: 'Nikhil'},
    {name: 'Nikhil'},
    {name: 'Nikhil'},
    {name: 'Nikhil'},
  ]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#EBF9F5',
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          minHeight: 60,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        {isSearchVisible ? (
          <TextInput
            placeholderTextColor={'black'}
            placeholder="Search here..."
            style={{fontSize: 18}}
          />
        ) : (
          <Text style={{fontSize: 20, fontWeight: 500, color: 'black'}}>
            My Appointments{' '}
          </Text>
        )}
      </View>

      <View
        style={{
          width: '92%',
          flex: 1,
          marginTop: 10,
        }}>
        <ScrollView
          contentContainerStyle={{paddingBottom: 60}}
          showsVerticalScrollIndicator={false}>
          {upcomingAppointments.map((element, index) => (
            <View
              key={index}
              style={{
                backgroundColor: 'white',
                justifyContent: 'space-around',

                borderRadius: 20,
                minHeight: 130,
                marginTop: 10,
                // paddingBottom: 25,
              }}>
              <View
                style={{
                  backgroundColor: 'white',
                  flexDirection: 'row',
                  // borderWidth: 1,
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  // width: '90%',
                  flex: 0.6,
                }}>
                <View
                  style={{
                    // width: '40%',
                    height: '100%',
                    // flex: 0.4,
                    borderRadius: 50,
                  }}>
                  <Image
                    style={{
                      borderRadius: 50,
                      height: 100,
                      width: 100,
                      // marginTop: 5,
                    }}
                    source={profileImage}
                  />
                </View>

                <View>
                  <Text style={{color: 'black', fontSize: 19}}>
                    Nikhil dotasara
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                    <Text style={{color: 'black'}}>Heart</Text>
                    <Text style={{color: 'black'}}>Raj</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                    <Text style={{color: 'black'}}>Date</Text>
                    <Text style={{color: 'black'}}>Time</Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-around',
                }}>
                <View
                  style={{
                    boxSizing: 'border-box',
                    paddingLeft: 5,
                    paddingRight: 5,
                    backgroundColor: '#AEF6E5',
                    // flex: 0.3,
                    // width: '48%',
                    borderRadius: 5,

                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 18, color: 'black'}}>
                    Your turn : 23
                  </Text>
                </View>
                <View
                  style={{
                    boxSizing: 'border-box',
                    paddingLeft: 5,
                    paddingRight: 5,
                    backgroundColor: '#AEF6E5',
                    // flex: 0.3,
                    // width: '48%',
                    borderRadius: 5,

                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 18, color: 'black'}}>
                    current : 15
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          height: '6.0%',
          width: '100%',
          backgroundColor: '#ACEFE1',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <BottomNavigator navigation={navigation} />
      </View>
    </View>
  );
}

export default AppointmentsUI;
