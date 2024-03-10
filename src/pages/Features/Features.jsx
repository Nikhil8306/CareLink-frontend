// importing libraries
import React, {useEffect, useState, useRef} from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

// dimensions
import {Dimensions} from 'react-native';

// components
import NextButton from '../../components/common/NextButton';

function Features({navigation}) {
  const [activeSlide, setActiveSlide] = useState(0);
  const screenWidth = Dimensions.get('screen').width;

  const carouselRef = useRef(null);
  const [entries, setEntries] = useState([
    {
      title: 'Skip the queue, book your hospital appointments on the go',
      text: 'Book hospital appointments instantly from your phone.',
      image: require('../../assets/nurseHappy.png'),
    },
    {
      title: 'Streamline your healthcare experience',
      text: 'Say goodbye to waiting rooms and hello to convenience',
      image: require('../../assets/doctorPatient.jpg'),
    },
    {
      title: 'Your health, your time – book appointments with ease.',
      text: 'Book, manage, and track your appointments effortlessly',
      image: require('../../assets/doctorPatient2.png'),
    },
  ]);

  useEffect(() => {
    console.log('OnBoarding screenloaded');
  }, []);

  useEffect(() => {
    const clearTimeOut = setTimeout(() => {
      const nextSlideIndex =
        activeSlide < entries.length - 1 ? activeSlide + 1 : 0;

      setActiveSlide(nextSlideIndex);
      carouselRef.current.snapToItem(nextSlideIndex);
    }, 2000);

    return () => clearTimeout(clearTimeOut);
  }, [activeSlide]);

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.carouselContainer}>
        <Image
          style={{
            objectFit: 'contain',
            width: '100%',
            height: '60%',
          }}
          source={item.image}
        />
        <Text style={{fontSize: 14, fontWeight: 'bold', color: 'black'}}>
          {item.title}
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'black',
          }}>
          {item.text}
        </Text>
      </View>
    );
  };

  const pagination = () => {
    return (
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        containerStyle={{
          bottom: 7,
          left: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          height: 10,
          width: 10,
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 5, // Adjust space between dots
          backgroundColor: '#007AFF', // Change dot color to a contrasting color
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.9}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={entries}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout={'default'}
        onSnapToItem={index => setActiveSlide(index)}
      />

      <View
        style={{
          width: '96%',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        {pagination()}
        <NextButton
          text={'Next'}
          navigation={navigation}
          destination={'MobileNumber'}
        />
      </View>
    </View>
  );
}

export default Features;

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselContainer: {
    height: '80%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});