import React, {useState, useEffect} from 'react';
import {
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  Image,
} from 'react-native';

import profileImage from '../../../assets/profile.jpg';
import heartIcon from '../../../assets/heartIcon.jpg';

// importing custom component
import BottomNavigator from '../login/BottomNavigator/BottomNavigator';

function SearchUI(props) {
  const {navigation} = props;
  // const [doctors, setDoctors] = useState([
  //   {name: 'Nikhil', heart: 'asdfsdf'},
  //   {name: 'Nikhil', heart: 'asdfsdf'},
  //   {name: 'Nikhil', heart: 'asdfsdf'},
  //   {name: 'Nikhil', heart: 'asdfsdf'},
  //   {name: 'Nikhil', heart: 'asdfsdf'},
  //   {name: 'Nikhil', heart: 'asdfsdf'},
  //   {name: 'Nikhil', heart: 'asdfsdf'},
  //   {name: 'Nikhil', heart: 'asdfsdf'},

  //   {name: 'Nikhil', heart: 'asdfsdf'},
  //   {name: 'Nikhil', heart: 'asdfsdf'},
  //   {name: 'Nikhil', heart: 'asdfsdf'},
  // ]);

  // const [hospitals, setHospitals] = useState([
  //   {name: 'Nikhil', heart: 'asdfsdf'},
  //   {name: 'Nikhil', heart: 'asdfsdf'},
  //   {name: 'Nikhil', heart: 'asdfsdf'},
  //   {name: 'Nikhil', heart: 'asdfsdf'},
  //   {name: 'Nikhil', heart: 'asdfsdf'},
  //   {name: 'Nikhil', heart: 'asdfsdf'},
  //   {name: 'Nikhil', heart: 'asdfsdf'},
  //   {name: 'Nikhil', heart: 'asdfsdf'},

  //   {name: 'Nikhil', heart: 'asdfsdf'},
  //   {name: 'Nikhil', heart: 'asdfsdf'},
  //   {name: 'Nikhil', heart: 'asdfsdf'},
  //   {name: 'Nikhil', heart: 'asdfsdf'},
  //   {name: 'Nikhil', heart: 'asdfsdf'},
  //   {name: 'Nikhil', heart: 'asdfsdf'},
  //   {name: 'Nikhil', heart: 'asdfsdf'},
  //   {name: 'Nikhil', heart: 'asdfsdf'},
  //   {name: 'Nikhil', heart: 'asdfsdf'},

  //   {name: 'Nikhil', heart: 'asdfsdf'},
  //   {name: 'Nikhil', heart: 'asdfsdf'},
  // ]);

  const [doctors, setDoctors] = useState([]);
  const [hospitals, setHospitals] = useState([]);

  const [doctorsVisible, setDoctorsVisible] = useState(true);

  const handleShowDoctors = () => {
    console.log('Showing all the doctors');
    setDoctorsVisible(true);
  };

  const handleShowHospitals = () => {
    console.log('Showing all the hospitals');
    setDoctorsVisible(false);
  };

  useEffect(() => {
    // request for getting doctors
    fetchingDoctors();
    fetchingHospitals();
  }, []);

  const fetchingDoctors = async () => {
    const response = await fetch('http://192.168.104.246:3030/user/getDoctor', {
      method: 'GET',
    });
    const doctors = (await response.json()).data;

    setDoctors(doctors);

    // console.log('Fetching doctors', doctors, response.status);
  };

  const fetchingHospitals = async () => {
    const response = await fetch(
      'http://192.168.104.246:3030/user/getHospital',
      {
        method: 'GET',
      },
    );

    const hospitals = (await response.json()).data;

    console.log(hospitals);

    setHospitals(hospitals);
  };

  return (
    <KeyboardAvoidingView behavior="height" style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            onPress={handleShowDoctors}
            style={[
              styles.tab,
              {backgroundColor: doctorsVisible ? '#8AF2D9' : 'white'},
            ]}>
            <Text style={styles.tabText}>Doctors</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleShowHospitals}
            style={[
              styles.tab,
              {backgroundColor: doctorsVisible ? 'white' : '#8AF2D9'},
            ]}>
            <Text style={styles.tabText}>Hospitals</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Search here...." />

          <Text style={{color: 'black'}}>169 results</Text>
        </View>

        <ScrollView
          contentContainerStyle={{paddingBottom: 45}}
          showsVerticalScrollIndicator={false}>
          {doctorsVisible
            ? doctors.map((doctor, index) => (
                <TouchableOpacity
                  key={doctor._id}
                  style={{
                    backgroundColor: '#FFFFFF',
                    maxHeight: 150,
                    minHeight: 140,
                    borderRadius: 20,
                    width: '95%',
                    flexDirection: 'row',
                    alignSelf: 'center',
                    marginTop: 15,
                    justifyContent: 'space-between',
                    // paddingBottom: 65,
                  }}>
                  <View
                    style={{
                      flex: 0.3,
                      borderRadius: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{
                        height: 90,
                        width: 90,
                        borderRadius: 50,
                      }}
                      // source={profileImage}
                      source={{uri: doctor.profileUrl}}
                    />
                  </View>

                  <View
                    style={{
                      flex: 0.5,
                      justifyContent: 'space-around',
                    }}>
                    <Text style={{fontSize: 18, color: 'black'}}>
                      {doctor.name}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        width: '70%',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={{color: 'black'}}>
                        {doctor.specializations[0]}
                      </Text>
                      <Text style={{color: 'black'}}>
                        {doctor.specializations[1]}
                      </Text>
                    </View>

                    <Text style={{color: 'black'}}>4.9 ratings</Text>
                  </View>

                  <View
                    style={{
                      flex: 0.2,
                      justifyContent: 'space-around',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#AEF6E5',
                        borderRadius: 60,
                        flex: 0.5,
                        height: 20,
                        width: 60,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        style={{
                          objectFit: 'contain',
                          width: '70%',
                          height: '70%',
                        }}
                        source={heartIcon}
                      />
                    </TouchableOpacity>
                    <Text>50$</Text>
                  </View>
                </TouchableOpacity>
              ))
            : hospitals.map((hospital, index) => (
                <TouchableOpacity
                  style={{
                    borderWidth: 2,
                    minHeight: 130,
                    maxHeight: 150,
                    borderRadius: 25,
                    width: '95%',
                    marginBottom: 10,
                    alignSelf: 'center',
                    flexDirection: 'row',
                  }}
                  key={hospitals._id}>
                  <View
                    style={{
                      flex: 1,
                      height: '100%',
                      width: '100%',
                      borderRadius: 25,
                    }}>
                    <Image
                      style={{
                        height: '100%',
                        width: '100%',
                        borderRadius: 25,
                        // objectFit: 'contain',
                      }}
                      // source={profileImage}
                      source={{uri: hospital.profileUrl}}
                    />
                  </View>

                  <View
                    style={{
                      position: 'absolute',
                      zIndex: 2,
                      alignItems: 'center',
                      justifyContent: 'space-around',
                      alignSelf: 'flex-end',
                      borderRadius: 25,
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 18,
                        color: 'white',
                      }}>
                      {hospital.name}
                    </Text>

                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                      4.6{' '}
                    </Text>

                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                      4.8 Km
                    </Text>
                  </View>
                </TouchableOpacity>
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
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 0,
    paddingVertical: 10,
    // height: '10%',
  },
  tab: {
    backgroundColor: '#8AF2D9',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 3.0,
    width: '40%',
  },
  tabText: {
    color: 'black',
    textAlign: 'center',
  },
  inputContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
  },
});

export default SearchUI;
