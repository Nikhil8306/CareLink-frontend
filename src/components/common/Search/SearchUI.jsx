import React, {useState} from 'react';
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

function SearchUI() {
  const [doctors, setDoctors] = useState([
    {name: 'Nikhil', heart: 'asdfsdf'},
    {name: 'Nikhil', heart: 'asdfsdf'},
    {name: 'Nikhil', heart: 'asdfsdf'},
    {name: 'Nikhil', heart: 'asdfsdf'},
    {name: 'Nikhil', heart: 'asdfsdf'},
    {name: 'Nikhil', heart: 'asdfsdf'},
    {name: 'Nikhil', heart: 'asdfsdf'},
    {name: 'Nikhil', heart: 'asdfsdf'},

    {name: 'Nikhil', heart: 'asdfsdf'},
    {name: 'Nikhil', heart: 'asdfsdf'},
    {name: 'Nikhil', heart: 'asdfsdf'},
  ]);

  const [hospitals, setHospitals] = useState([
    {name: 'Nikhil', heart: 'asdfsdf'},
    {name: 'Nikhil', heart: 'asdfsdf'},
    {name: 'Nikhil', heart: 'asdfsdf'},
    {name: 'Nikhil', heart: 'asdfsdf'},
    {name: 'Nikhil', heart: 'asdfsdf'},
    {name: 'Nikhil', heart: 'asdfsdf'},
    {name: 'Nikhil', heart: 'asdfsdf'},
    {name: 'Nikhil', heart: 'asdfsdf'},

    {name: 'Nikhil', heart: 'asdfsdf'},
    {name: 'Nikhil', heart: 'asdfsdf'},
  ]);

  return (
    <KeyboardAvoidingView behavior="height" style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.tabContainer}>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Doctors</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Hospitals</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Search here...." />

          <Text style={{color: 'black'}}>169 results</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {doctors.map((element, index) => (
            <TouchableOpacity
              key={index}
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
              }}>
              <View
                style={{
                  flex: 0.3,
                  borderRadius: 50,
                  // backgroundColor: 'blue',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    // height: '60%',
                    // width: '80%',
                    height: 90,
                    width: 90,
                    borderRadius: 50,
                    // objectFit: 'contain',
                  }}
                  source={profileImage}
                />
              </View>

              <View
                style={{
                  // backgroundColor: 'green',
                  flex: 0.5,
                  justifyContent: 'space-around',
                }}>
                <Text style={{fontSize: 18, color: 'black'}}>Name</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '70%',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{color: 'black'}}>Heart</Text>
                  <Text style={{color: 'black'}}>Heart</Text>
                </View>

                <Text style={{color: 'black'}}>4.9 ratings</Text>
              </View>

              <View
                style={{
                  // borderWidth: 2,
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
          ))}
        </ScrollView>
      </ScrollView>
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
