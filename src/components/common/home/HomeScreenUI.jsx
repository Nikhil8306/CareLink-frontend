import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';

// importing assests
import locationImage from '../../../assets/locationImage.jpg';
import notificationImage from '../../../assets/notification.jpg';
import profileImage from '../../../assets/profile.jpg';
// import HeartImage from '../../../assets/heartImage.jpg';

// importing essential libraries

function HomeScreenUI(props) {
  const [searchContent, setSearchContent] = useState();
  const [consultants, setConsultants] = useState([
    {name: 'Nikhil', type: 'dentist', date: '12/12/12', time: '12:00PM'},
    {name: 'Nikhil', type: 'dentist', date: '12/12/12', time: '12:00PM'},
    {name: 'Nikhil', type: 'dentist', date: '12/12/12', time: '12:00PM'},
    {name: 'Nikhil', type: 'dentist', date: '12/12/12', time: '12:00PM'},
    {name: 'Nikhil', type: 'dentist', date: '12/12/12', time: '12:00PM'},
    {name: 'Nikhil', type: 'dentist', date: '12/12/12', time: '12:00PM'},
    {name: 'Nikhil', type: 'dentist', date: '12/12/12', time: '12:00PM'},
    {name: 'Chomu', type: 'dentist', date: '12/12/12', time: '12:00PM'},
  ]);

  const [categories, setCategories] = useState([
    {name: 'Ortho', photo: ''},
    {name: 'Ortho', photo: ''},
    {name: 'Ortho', photo: ''},
    {name: 'Ortho', photo: ''},
    {name: 'Ortho', photo: ''},
    {name: 'Ortho', photo: ''},
    {name: 'Ortho', photo: ''},
    {name: 'Ortho', photo: ''},
    {name: 'Ortho', photo: ''},
  ]);

  return (
    <View style={{backgroundColor: '#EDFAF6', flex: 1}}>
      {/* This is top container */}
      <View
        style={{
          flex: 0.08,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: 'pink',
          minHeight: 13,
        }}>
        <View
          style={{
            height: '100%',
            flexDirection: 'row',
            width: '30%',
            alignItems: 'center',
          }}>
          <Image
            style={{objectFit: 'contain', height: '70%', width: '20%'}}
            source={locationImage}
          />
          <Text>New york, USA</Text>
        </View>
        {/* This is notification container */}
        <View
          style={{
            width: '15%',
            height: '100%',
            alignItems: 'center',
          }}>
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
          backgroundColor: 'red',
          flex: 0.07,
          alignItems: 'center',
        }}>
        {/* <Text>Yahan pe search bar aaega</Text> */}
        <TextInput placeholder="Search button here" />
      </View>

      <View style={{backgroundColor: '#EDFAF6', flex: 0.25}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Consultants</Text>
        <ScrollView
          style={{marginTop: 15}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {consultants.map((element, index) => (
            <TouchableOpacity
              key={index}
              style={{
                backgroundColor: '#97F3DD',
                height: '80%',
                // minWidth: 350,
                flex: 1,
                minWidth: 320,
                marginLeft: 10,
                marginRight: 10,

                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: 24,
              }}>
              <View
                style={{
                  height: '85%',
                  width: '35%',
                  backgroundColor: 'red',
                  borderRadius: 45,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 20,
                }}>
                <Image
                  style={{
                    // objectFit: 'contain',
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                    borderRadius: 45,
                  }}
                  source={profileImage}
                />
              </View>

              <View
                style={{
                  height: '70%',
                  width: '55%',
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                  {element.name}
                </Text>
                <Text>{element.type}</Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: '40%',

                    justifyContent: 'space-between',
                  }}>
                  <Text>{element.date}</Text>
                  <Text>{element.time}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={{flex: 0.25}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Categories</Text>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          contentContainerStyle={{
            // backgroundColor: 'blue',
            alignItems: 'center',
            // flex: 1,
          }}>
          {categories.map(element => (
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                // maxWidth: 200,
                minWidth: 100,
                borderRadius: 22,
                marginLeft: 15,
                marginRight: 15,

                // maxHeight: 50,
                height: '60%',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  width: '60%',
                  height: '60%',
                  objectFit: 'contain',
                }}
                source={profileImage}
              />

              <Text style={{color: '#7689A3', fontSize: 18}}>Ortho</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={{flex: 0.25}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Popular Doctors</Text>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{alignItems: 'center'}}>
          {consultants.map(element => (
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                height: '80%',
                minWidth: 220,
                maxWidth: 280,
                borderRadius: 20,
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 15,
                marginRight: 15,
              }}>
              <View
                style={{
                  width: '30%',
                  height: '90%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    objectFit: 'contain',
                    width: '90%',
                    height: '90%',
                  }}
                  source={profileImage}
                />
              </View>

              <View
                style={{
                  width: '65%',
                  height: '80%',
                  justifyContent: 'space-between',
                }}>
                <Text>Lana Rhodes</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-between',
                  }}>
                  <Text>Cardio</Text>
                  <Text>London</Text>
                </View>

                <Text>4.6*(762 reviews)</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={{flex: 0.25}}></View>
    </View>
  );
}

export default HomeScreenUI;
