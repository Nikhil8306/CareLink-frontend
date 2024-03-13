import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ListRenderItem,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Tabs} from 'react-native-collapsible-tab-view';

// importing images
import profile from '../../../assets/profile.jpg';
import BackIcon from '../../../elements/BackIcon';

const HEADER_HEIGHT = 250;

const DATA = [0, 1, 2, 3, 4];

const Header = props => {
  const {navigation} = props;
  const [isAddressVisible, setIsAddressVisible] = useState(false);

  const handleReadMore = () => {
    setIsAddressVisible(true);
  };
  return (
    <View style={styles.header}>
      <Image
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        source={profile}
      />

      {/* <View
        style={{
          position: 'absolute',
          top: 10,
          backgroundColor: '#CBF9EE',
          borderRadius: 50,
        }}>
        <BackIcon navigation={navigation} />
      </View> */}
      <View style={{position: 'absolute', bottom: 10, paddingLeft: 10}}>
        <Text style={{fontSize: 30, color: 'white', fontFamily: '900'}}>
          Soni group of hospitals
        </Text>
        <Text style={{fontSize: 16, color: 'white'}}> 4.5 *</Text>

        {isAddressVisible ? (
          <View>
            <Text style={{color: 'white', fontSize: 18}}>
              Laxmangarh Road mukundgarh Mandi
            </Text>
          </View>
        ) : (
          <TouchableOpacity onPress={handleReadMore}>
            <Text style={{color: 'white'}}>Read More...</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const HospitalDetailUI = ({navigation}) => {
  // const {navigation} = props;
  const Data = [
    {name: 'nikhil', blah: 'blahh'},
    {name: 'nikhil', blah: 'blahh'},
    {name: 'nikhil', blah: 'blahh'},
    {name: 'nikhil', blah: 'blahh'},
    {name: 'nikhil', blah: 'blahh'},
    {name: 'nikhil', blah: 'blahh'},
  ];

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          position: 'absolute',
          // top: 10,
          backgroundColor: '#CBF9EE',
          // backgroundColor: '#EDFAF6',
          borderRadius: 50,
          zIndex: 1,
          height: 40,
          width: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <BackIcon navigation={navigation} />
      </View>
      <Tabs.Container
        renderHeader={Header}
        headerHeight={HEADER_HEIGHT} // optional
      >
        <Tabs.Tab name="Doctors">
          <Tabs.ScrollView>
            {DATA.map((element, index) => (
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
                    source={profile}
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
                      source={profile}
                    />
                  </TouchableOpacity>
                  <Text>50$</Text>
                </View>
              </TouchableOpacity>
            ))}
          </Tabs.ScrollView>
        </Tabs.Tab>
      </Tabs.Container>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 250,
    width: '100%',
    backgroundColor: '#EDFAF6',
  },
  boxA: {
    backgroundColor: 'red',
  },

  header: {
    height: HEADER_HEIGHT,
    width: '100%',
    backgroundColor: '#97F3DD',
  },
});

export default HospitalDetailUI;
