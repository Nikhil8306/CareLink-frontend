import React, {useState, useEffect} from 'react';
import {ScrollView, Text, View, TouchableOpacity, Image} from 'react-native';

// import profileImage from '../../../assets/profile.jpg';
import hospitalImage from '../../../assets/hospitalImage.jpg';

function SchemesHospitalsUI({navigation, scheme}) {
  const [hospitals, setHospitals] = useState([
    // {name: 'Nikhil', heart: 'asdfsdf'},
    // {name: 'Nikhil', heart: 'asdfsdf'},
    // {name: 'Nikhil', heart: 'asdfsdf'},
    // {name: 'Nikhil', heart: 'asdfsdf'},
    // {name: 'Nikhil', heart: 'asdfsdf'},
    // {name: 'Nikhil', heart: 'asdfsdf'},
    // {name: 'Nikhil', heart: 'asdfsdf'},
    // {name: 'Nikhil', heart: 'asdfsdf'},
  ]);

  console.log(scheme);
  useEffect(() => {
    getHospitalWithScheme();
  }, []);

  const getHospitalWithScheme = async () => {
    console.log('Requesting for schemes with hospitals');
    const response = await fetch(
      'http://192.168.104.246:3030/user/getSchemeHospital',
      {
        method: 'GET',

        body: {
          scheme: scheme,
        },
      },
    );

    console.log(await response.json());
  };

  const handleHospital = () => {
    navigation.navigate('ApplyForScheme');
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 24,
          textAlign: 'center',
          fontWeight: '800',
          color: 'black',
        }}>
        Hospitals with scheme
      </Text>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        {hospitals.map((element, index) => (
          <TouchableOpacity
            onPress={handleHospital}
            key={index}
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
            // key={index}
          >
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
                source={hospitalImage}
                // source={{
                //   uri: 'https://media.licdn.com/dms/image/D4D03AQG3FgCVA5x49g/profile-displayphoto-shrink_200_200/0/1688219464602?e=1717027200&v=beta&t=t-Js19Mh1t2hLWVUWD0Qq3Ebgpc83x9b5dGixuz0XjI',
                // }}
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
                marginLeft: 10,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 23,
                  color: 'black',
                  textAlign: 'center',
                }}>
                Soni Hospitals
              </Text>

              <Text style={{color: 'black', fontWeight: 'bold'}}>
                4.6 rating
              </Text>

              <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
                4.8 Km
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

export default SchemesHospitalsUI;
