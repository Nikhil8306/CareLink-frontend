import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Dimensions,
} from 'react-native';
import locationImage from '../../../assets/locationImage.jpg';
import notificationImage from '../../../assets/notification.jpg';
import profileImage from '../../../assets/profile.jpg';

import settingsImage from '../../../assets/settings.jpg';

// importing components
import BottomNavigator from '../login/BottomNavigator/BottomNavigator';

import AsyncStorage from '@react-native-async-storage/async-storage';

import profile_icon from '../../../assets/profile_icon.jpg';

function HomeScreenUI(props) {
  const {navigation, handleDoctor, handleCategory} = props;

  const {
    handleSearch,
    handleAppointment,
    handleSettings,
    handleHome,
    handleHospital,
  } = props;

  const [searchContent, setSearchContent] = useState('');
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const [consultants, setConsultants] = useState([
    {name: 'Nikhil', type: 'dentist', date: '12/12/12', time: '12:00PM'},
    {name: 'Chomu', type: 'dentist', date: '12/12/12', time: '12:00PM'},
    {name: 'Nikhil', type: 'dentist', date: '12/12/12', time: '12:00PM'},
    {name: 'Chomu', type: 'dentist', date: '12/12/12', time: '12:00PM'},
    {name: 'Nikhil', type: 'dentist', date: '12/12/12', time: '12:00PM'},
    {name: 'Chomu', type: 'dentist', date: '12/12/12', time: '12:00PM'},
  ]);

  const [popularDoctors, setPopularDoctors] = useState([
    {
      name: 'Dr poonia',
      specialty: 'Cardio',
      location: 'London',
      rating: '4.6',
      reviews: '762',
    },

    {
      name: 'Dr poonia',
      specialty: 'Cardio',
      location: 'London',
      rating: '4.6',
      reviews: '762',
    },
    {
      name: 'Dr poonia',
      specialty: 'Cardio',
      location: 'London',
      rating: '4.6',
      reviews: '762',
    },
    {
      name: 'Dr poonia',
      specialty: 'Cardio',
      location: 'London',
      rating: '4.6',
      reviews: '762',
    },
    {
      name: 'Dr poonia',
      specialty: 'Cardio',
      location: 'London',
      rating: '4.6',
      reviews: '762',
    },
    {
      name: 'Dr soni',
      specialty: 'Cardio',
      location: 'London',
      rating: '4.6',
      reviews: '762',
    },
    {
      name: 'Dr soni',
      specialty: 'Cardio',
      location: 'London',
      rating: '4.6',
      reviews: '762',
    },
    {
      name: 'Dr soni',
      specialty: 'Cardio',
      location: 'London',
      rating: '4.6',
      reviews: '762',
    },
    {
      name: 'Dr soni',
      specialty: 'Cardio',
      location: 'London',
      rating: '4.6',
      reviews: '762',
    },
    {
      name: 'Dr soni',
      specialty: 'Cardio',
      location: 'London',
      rating: '4.6',
      reviews: '762',
    },
    {
      name: 'Dr soni',
      specialty: 'Cardio',
      location: 'London',
      rating: '4.6',
      reviews: '762',
    },
    {
      name: 'Dr soni',
      specialty: 'Cardio',
      location: 'London',
      rating: '4.6',
      reviews: '762',
    },
  ]);

  const [categories, setCategories] = useState([
    {name: 'Ortho', photo: ''},
    {name: 'Pediatric', photo: ''},
    {name: 'Ortho', photo: ''},
    {name: 'Pediatric', photo: ''},
    {name: 'Ortho', photo: ''},
    {name: 'Pediatric', photo: ''},
    {name: 'Ortho', photo: ''},
    {name: 'Pediatric', photo: ''},
    {name: 'Ortho', photo: ''},
    {name: 'Pediatric', photo: ''},
    {name: 'Ortho', photo: ''},
    {name: 'Pediatric', photo: ''},
  ]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    // Clean up listeners
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  useEffect(() => {
    // request for getting doctors
    // fetchingDoctors();
  }, []);

  // const fetchingDoctors = async () => {
  //   const response = await fetch('http://192.168.104.246:3030/user/getDoctor', {
  //     method: 'GET',
  //   });
  //   const doctors = (await response.json()).data;

  //   setPopularDoctors(doctors);

  //   console.log('Fetching doctors', doctors, response.status);
  // };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{backgroundColor: '#EDFAF6', flex: 1}}>
          <View
            style={{
              flex: 0.3,

              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              minHeight: 35,
              maxHeight: 80,
            }}>
            <View
              style={{
                height: '100%',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  objectFit: 'contain',
                  height: '70%',
                  width: '20%',
                  marginLeft: 8,
                }}
                source={locationImage}
              />
              <Text style={{color: 'black'}}>Jaipur, Raj</Text>
            </View>
            <View style={{width: '15%', height: '100%', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Settings');
                }}
                style={{
                  height: '100%',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={profile_icon}
                  style={{
                    marginTop: 4,
                    height: '80%',
                    width: '80%',
                    objectFit: 'contain',
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#EDFAF6',
              flex: 0.25,
              paddingVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 10,
                color: 'black',
              }}>
              Consultants
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{paddingHorizontal: 10, paddingTop: 10}}>
              {consultants.map((consultant, index) => (
                <View
                  key={index}
                  style={{
                    marginRight: 10,
                    minWidth: 270,
                    flexDirection: 'row',
                    minHeight: 100,
                    alignItems: 'center',
                    // maxHeight: 200,
                  }}>
                  <View
                    style={{
                      backgroundColor: '#97F3DD',
                      flex: 1,
                      padding: 10,
                      borderRadius: 20,
                      height: '100%',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{width: 70, height: 70, borderRadius: 35}}
                      source={profileImage}
                    />

                    <View
                      style={{
                        width: '70%',
                        justifyContent: 'space-around',
                      }}>
                      <Text style={{fontSize: 20, color: 'black'}}>
                        {consultant.name}
                      </Text>
                      <Text style={{color: 'black', fontSize: 17}}>
                        {consultant.type}
                      </Text>

                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text style={{color: 'black'}}>{consultant.date}</Text>
                        <Text style={{color: 'black'}}>{consultant.time}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>

          <View
            style={{
              backgroundColor: '#EDFAF6',
              justifyContent: 'space-around',
              flex: 0.25,
              paddingVertical: 10,
              // maxHeight: 190,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 10,
                color: 'black',
                marginBottom: 6,
              }}>
              Categories
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {categories.map((category, index) => (
                <TouchableOpacity
                  onPress={handleCategory}
                  key={index}
                  style={{
                    marginRight: 10,
                    minWidth: 70,
                  }}>
                  <View
                    style={{
                      backgroundColor: '#FFF',
                      padding: 10,
                      borderRadius: 20,
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{width: 50, height: 50, borderRadius: 25}}
                      source={profileImage}
                    />
                    <Text style={{color: 'black', fontSize: 17}}>
                      {category.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View
            style={{
              backgroundColor: '#EDFAF6',
              flex: 0.25,
              // paddingVertical: 10,
              maxHeight: 200,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 21,
                fontWeight: 'bold',
                marginLeft: 10,
                color: 'black',
                marginBottom: 6,
              }}>
              Popular Doctors
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {popularDoctors.map((element, index) => (
                <TouchableOpacity
                  onPress={handleDoctor}
                  key={index}
                  style={{marginRight: 10}}>
                  <View
                    style={{
                      backgroundColor: '#FFF',
                      padding: 10,
                      minWidth: 270,
                      borderRadius: 20,
                      flexDirection: 'row',
                      alignItems: 'center',
                      minHeight: 130,
                    }}>
                    <View
                      style={{
                        // height: '100%',
                        flex: 0.8,
                        borderRadius: 55,
                      }}>
                      <Image
                        style={{
                          // width: 60,
                          // height: 70,
                          backgroundColor: 'red',
                          // height: '100%',
                          // width: '100%',
                          height: 100,
                          width: 100,
                          objectFit: 'cover',
                          borderRadius: 55,
                        }}
                        source={profileImage}
                      />
                    </View>

                    <View
                      style={{
                        flex: 0.5,
                        // backgroundColor: 'pink',
                        paddingLeft: 10,
                      }}>
                      <Text style={{fontSize: 18, color: 'black'}}>
                        {/* {doctor.name.charAt(0).toUpperCase() +
                          doctor.name.slice(1)} */}
                        Nikhil
                      </Text>
                      <Text style={{fontSize: 18, color: 'black'}}>
                        MBBS
                        {/* {doctor.specializations[0]} */}
                      </Text>

                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          // backgroundColor: 'red',
                        }}>
                        <Text style={{color: 'black'}}>
                          {/* {doctor?.location} */}
                          London
                        </Text>
                        <Text
                          style={{
                            color: 'black',
                            fontSize: 20,
                            alignSelf: 'flex-start',
                          }}>
                          {/* MBBS */}
                          {/* {doctor?.qualifications[0]} */}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <View
            style={{
              marginBottom: 43,
              backgroundColor: '#EDFAF6',
              justifyContent: 'space-around',
              flex: 0.25,
              paddingVertical: 10,
              maxHeight: 230,
            }}>
            <Text
              style={{
                fontSize: 21,
                fontWeight: 'bold',
                marginLeft: 10,
                color: 'black',
                marginBottom: 6,
              }}>
              Popular Hospitals
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 10,
                // backgroundColor: 'blue',
                maxHeight: 200,
              }}>
              {popularDoctors.map((doctor, index) => (
                <TouchableOpacity
                  onPress={handleHospital}
                  key={index}
                  style={{
                    backgroundColor: 'yellow',
                    marginRight: 10,
                    minWidth: 270,
                    minHeight: 140,
                    borderRadius: 20,
                    overflow: 'hidden',
                  }}>
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                      resizeMode: 'cover',
                    }}
                    source={profileImage}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          height: '6.2%',
          width: '100%',
          backgroundColor: '#ACEFE1',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <BottomNavigator navigation={navigation} />
      </View>

      {/* Empty view to push content up when keyboard appears */}
      {keyboardVisible && <View style={{flex: 1}} />}
    </KeyboardAvoidingView>
  );
}

export default HomeScreenUI;
