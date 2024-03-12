import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';

// importing utility
import BackIcon from '../../../elements/BackIcon';

// importing image
import HeartIcon from '../../../assets/heartIcon.jpg';
import nurse from '../../../assets/nurse.jpg';
import experience from '../../../assets/experience.jpg';
import patients from '../../../assets/patients.jpg';
import reviewIcon from '../../../assets/review.jpg';

function DoctorDetail(props) {
  const {navigation} = props;
  return (
    <View style={{flex: 1, backgroundColor: '#97F3DD'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <BackIcon navigation={navigation} />

        <TouchableOpacity
          style={{
            backgroundColor: '#CBF9EE',
            width: 60,
            height: 60,
            borderRadius: 45,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{width: 40, height: 30, objectFit: 'contain'}}
            source={HeartIcon}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: '50%',
          justifyContent: 'space-around',
        }}>
        <View
          style={{
            flex: 0.4,
            height: '100%',
            justifyContent: 'space-evenly',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              maxWidth: 60,
              minHeight: 50,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'black', fontSize: 16}}>4.8*</Text>
          </View>

          <View>
            <Text style={{fontSize: 33, color: 'black'}}>Melina Grace</Text>
          </View>

          <View>
            <Text style={{color: 'black'}}>MBBS ,MD</Text>
            <Text style={{color: 'black'}}>Medicine specialist</Text>
          </View>
        </View>

        <View
          style={{
            flex: 0.5,
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{objectFit: 'contain', width: '100%', height: '100%'}}
            source={nurse}
          />
        </View>
      </View>

      <View
        style={{
          backgroundColor: 'white',
          opacity: 0.7,
          height: '48%',
          position: 'absolute',
          width: '100%',
          zIndex: 1,
          bottom: 0,
          borderTopRightRadius: 35,
          borderTopLeftRadius: 35,
          justifyContent: 'space-around',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            flexDirection: 'row',
            minHeight: 90,
            borderRadius: 30,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <View style={{flex: 0.3, flexDirection: 'row'}}>
            <Image style={{width: 30, height: 30}} source={experience} />
            <View>
              <Text style={{color: '#65DBC4', fontSize: 16}}>7+ years</Text>
              <Text style={{color: 'black', fontSize: 14}}>Experience</Text>
            </View>
          </View>
          <View style={{flex: 0.3, flexDirection: 'row'}}>
            <Image style={{width: 30, height: 30}} source={patients} />
            <View>
              <Text style={{color: '#65DBC4', fontSize: 16}}>2.6k+ </Text>
              <Text style={{color: 'black', fontSize: 14}}>Patients</Text>
            </View>
          </View>
          <View style={{flex: 0.3, flexDirection: 'row'}}>
            <Image style={{width: 30, height: 30}} source={reviewIcon} />
            <View>
              <Text style={{color: '#65DBC4', fontSize: 16}}>1.2k+</Text>
              <Text style={{color: 'black'}}>Reviews</Text>
            </View>
          </View>
        </View>

        <View>
          <Text style={{color: 'black', fontSize: 23}}>Description</Text>

          <Text style={{color: 'black', fontSize: 16, textAlign: 'center'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            praesentium ratione cupiditate veritatis aperiam ipsa eum
            repudiandae earum enim ad dolor facilis maxime mollitia iusto
            voluptas, consequuntur dicta exercitationem perferendis!
          </Text>
        </View>
      </View>
    </View>
  );
}

export default DoctorDetail;
