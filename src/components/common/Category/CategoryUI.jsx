import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import heartIcon from '../../../assets/heartIcon.jpg';
import profileImage from '../../../assets/profile.jpg';
import BackIcon from '../../../elements/BackIcon';

function CategoryUI(props) {
  const {navigation, handleShowDoctors, handleShowHospitals} = props;

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

  const [doctorsVisible, setDoctorsVisible] = useState(true);
  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 30, color: 'black', textAlign: 'center'}}>
        Heart
      </Text>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{paddingBottom: 45}}
          showsVerticalScrollIndicator={false}>
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
                  source={profileImage}
                />
              </View>

              <View
                style={{
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
      </View>
      <View
        style={{
          backgroundColor: '#CBF9EE',
          position: 'absolute',
          top: 0,
          borderRadius: 50,
        }}>
        <BackIcon navigation={navigation} />
      </View>
    </View>
  );
}

export default CategoryUI;

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
