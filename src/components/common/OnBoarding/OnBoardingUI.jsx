// import React, {useRef, useCallback, useState} from 'react';
// import {View, Image} from 'react-native';

// // importing essesntial components
import Dropdown from '../../../elements/Dropdown';
import CustomInput from '../../../elements/CustomInput';
import NextButton from '../NextButton';

// // importing images
// // import Logo from '../../../assets/logo.png';

// import LottieView from 'lottie-react-native';

// // importing redux dispatch
// import {useSelector, useDispatch} from 'react-redux';
// // import {updateDetails} from '../../../pages/store/slices/userDetails';

// function OnBoarding(props) {
//   const dispatch = useDispatch();

//   const {onPress, navigation} = props;
//   const [isDropdownVisible, setDropdownVisible] = useState(false);
//   const [gender, setGender] = useState();
//   const [age,setAge]=useState();
//   const [address,setAddress]=useState();
//   const [state,setState]=useState();
//   const [BPL,setBPL]=useState();
//   const [aadhaar,setAadhaar]=useState();

//   const showDropdown = () => {
//     setDropdownVisible(!isDropdownVisible);
//   };

//   const handleGender = gender => {
//     setGender(gender);
//     setDropdownVisible(false);
//   };

//   const handleFinish=(name,age,gender,address,state,BPL,aadhaar)=>{
//     onPress(name,age,gender,address,state,BPL,aadhaar)
//   }

//   // const saveUserDetails = () => {
//   //   dispatch(updateDetails({name: 'Nikhil', age: 30}));
//   //   navigation.navigate('HomeScreen');
//   // };

//   return (
//     <View
//       style={{
//         // height: '100%',
//         flex: 1,
//         width: '100%',
//         alignItems: 'center',
//         backgroundColor: 'white',
//         // justifyContent: 'center',
//       }}>
//       <View
//         style={{
//           backgroundColor: 'white',
//           height: '55%',
//           justifyContent: 'center',
//           width: '100%',
//           alignItems: 'center',
//         }}>
//         {/* <Image
//           style={{
//             width: '100%',
//             height: '60%',
//             objectFit: 'contain',
//           }}
//           source={OnBoardingImage}
//         /> */}

//         <LottieView
//           source={require('../../../assets/animatedGifs/onBoarding.json')}
//           style={{width: 200, height: 200}}
//           autoPlay
//           loop
//         />

//         <CustomInput toEnter={'Name'} isButton={false} />
//         <CustomInput toEnter={'Age'} isButton={false} />
//         <CustomInput
//           handleInputs={['Male', 'Female', 'Others']}
//           toEnter={'Gender'}
//           isButton={true}
//           inputButton={'Gender'}
//           showDropdown={showDropdown}
//           inputValue={gender}
//         />
//         <CustomInput toEnter={'Address'} isButton={false} />
//         <CustomInput toEnter={'State'} isButton={false} />

//         <CustomInput
//           toEnter={'Enter your BPL number (Optional)'}
//           isButton={false}
//         />

//         <CustomInput toEnter={'Enter your Aadhar Number'} isButton={false} />
//       </View>

//       {
//         <View
//           style={{
//             position: 'absolute',
//             bottom: 0,
//             height: '25%',
//             flex: 0.8,
//             width: '100%',
//             backgroundColor: 'white',
//             // justifyContent: 'space-around',
//             justifyContent: 'flex-end',
//             alignItems: 'center',
//           }}>
//           <NextButton onPress={handleFinish} text={'Finish'} />
//           {isDropdownVisible ? <Dropdown handleGender={handleGender} /> : null}
//         </View>
//       }

//       {/* <View style={{backgroundColor: 'red'}}>
//         <NextButton
//           navigation={navigation}
//           text={'Finish'}
//           destination={'HomeScreen'}
//         />
//       </View> */}
//     </View>
//   );
// }

// export default OnBoarding;

// OnBoarding.js
import React, {useState} from 'react';
import {View} from 'react-native';
// import CustomInput from './CustomInput';
// import NextButton from './NextButton'; // Assuming NextButton is imported from somewhere
// import Dropdown from './Dropdown'; // Assuming Dropdown is imported from somewhere

function OnBoarding(props) {
  const {onPress, navigation} = props;
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [BPL, setBPL] = useState('');
  const [aadhaar, setAadhaar] = useState('');
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const showDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleFinish = () => {
    // Your finish handling logic here
    onPress(name, age, gender, address, state, BPL, aadhaar);
  };

  const handleGender = selectedGender => {
    setGender(selectedGender);
    setDropdownVisible(false);
  };

  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          backgroundColor: 'white',
          height: '55%',
          justifyContent: 'center',
          width: '100%',
          alignItems: 'center',
        }}>
        <CustomInput
          toEnter={'Name'}
          isButton={false}
          inputValue={name}
          setInputValue={setName}
        />
        <CustomInput
          toEnter={'Age'}
          isButton={false}
          inputValue={age}
          setInputValue={setAge}
        />
        <CustomInput
          handleInputs={['Male', 'Female', 'Others']}
          toEnter={'Gender'}
          isButton={true}
          inputButton={'Gender'}
          showDropdown={showDropdown}
          inputValue={gender}
          setInputValue={setGender}
        />
        <CustomInput
          toEnter={'Address'}
          isButton={false}
          inputValue={address}
          setInputValue={setAddress}
        />
        <CustomInput
          toEnter={'State'}
          isButton={false}
          inputValue={state}
          setInputValue={setState}
        />
        <CustomInput
          toEnter={'Enter your BPL number (Optional)'}
          isButton={false}
          inputValue={BPL}
          setInputValue={setBPL}
        />
        <CustomInput
          toEnter={'Enter your Aadhar Number'}
          isButton={false}
          inputValue={aadhaar}
          setInputValue={setAadhaar}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          height: '25%',
          flex: 0.8,
          width: '100%',
          backgroundColor: 'white',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <NextButton onPress={handleFinish} text={'Finish'} />
        {isDropdownVisible && <Dropdown handleGender={handleGender} />}
      </View>
    </View>
  );
}

export default OnBoarding;
