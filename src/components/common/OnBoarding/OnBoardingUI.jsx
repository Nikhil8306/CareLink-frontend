import React, {useRef, useCallback, useState} from 'react';
import {View, Image} from 'react-native';

// importing essesntial components
import Dropdown from '../../../elements/Dropdown';
import CustomInput from '../../../elements/CustomInput';
import NextButton from '../NextButton';

// importing images
import Logo from '../../../assets/logo.png';
import OnBoardingImage from '../../../assets/OnBoardingImage.jpg';

function OnBoarding({navigation}) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [gender, setGender] = useState();

  const showDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleGender = gender => {
    setGender(gender);
    setDropdownVisible(false);
  };

  return (
    <View
      style={{
        // height: '100%',
        flex: 1,
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'white',
        // justifyContent: 'center',
      }}>
      <View
        style={{
          backgroundColor: 'white',
          height: '55%',
          justifyContent: 'center',
          width: '100%',
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: '100%',
            height: '60%',
            objectFit: 'contain',
          }}
          source={OnBoardingImage}
        />

        <CustomInput toEnter={'Name'} isButton={false} />
        <CustomInput toEnter={'Age'} isButton={false} />
        <CustomInput
          toEnter={'Gender'}
          isButton={true}
          inputButton={'Gender'}
          showDropdown={showDropdown}
          inputValue={gender}
        />
      </View>

      {
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            height: '35%',
            flex: 0.8,
            width: '100%',
            backgroundColor: 'white',
            // justifyContent: 'space-around',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <NextButton
            navigation={navigation}
            text={'Finish'}
            destination={'HomeScreen'}
          />
          {isDropdownVisible ? <Dropdown handleGender={handleGender} /> : null}
        </View>
      }

      {/* <View style={{backgroundColor: 'red'}}>
        <NextButton
          navigation={navigation}
          text={'Finish'}
          destination={'HomeScreen'}
        />
      </View> */}
    </View>
  );
}

export default OnBoarding;