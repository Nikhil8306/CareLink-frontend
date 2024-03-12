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

// importing components
import BottomNavigator from '../login/BottomNavigator/BottomNavigator';

function HomeScreenUI(props) {
  const {navigation} = props;

  const {handleSearch, handleAppointment, handleSettings, handleHome} = props;

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
              flex: 0.5,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              minHeight: 35,
            }}>
            <View
              style={{
                height: '100%',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{objectFit: 'contain', height: '70%', width: '20%'}}
                source={locationImage}
              />
              <Text style={{color: 'black'}}>New york, USA</Text>
            </View>
            <View style={{width: '15%', height: '100%', alignItems: 'center'}}>
              <TouchableOpacity
                style={{
                  height: '100%',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={notificationImage}
                  style={{height: '60%', width: '70%', objectFit: 'contain'}}
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
              contentContainerStyle={{paddingHorizontal: 10}}>
              {consultants.map((consultant, index) => (
                <View
                  key={index}
                  style={{
                    marginRight: 10,
                    minWidth: 270,
                    flexDirection: 'row',
                    minHeight: 120,
                    alignItems: 'center',
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
              Categories
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{paddingHorizontal: 10}}>
              {categories.map((category, index) => (
                <TouchableOpacity
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
              paddingVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 10,
                color: 'black',
              }}>
              Popular Doctors
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 10,

                // height: '100%',
              }}>
              {popularDoctors.map((doctor, index) => (
                <TouchableOpacity key={index} style={{marginRight: 10}}>
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
                        {doctor.name}
                      </Text>
                      <Text style={{fontSize: 16, color: 'black'}}>
                        {doctor.specialty}
                      </Text>

                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text style={{color: 'black'}}>{doctor.location}</Text>
                        <Text style={{color: 'black'}}>{doctor.rating}</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <View
            style={{
              marginBottom: 40,
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
              Popular Hospitals
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{paddingHorizontal: 10}}>
              {popularDoctors.map((doctor, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
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
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
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
