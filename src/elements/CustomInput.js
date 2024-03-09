import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

function CustomInput(props) {
  const {toEnter, isButton, inputButton, isNumeric, showDropdown, inputValue} =
    props;

  return (
    <View
      style={{
        width: '85%',
        borderRadius: 10,
        borderWidth: 1,
        marginBottom: 10,
        minHeight: 55,
      }}>
      {!isButton ? (
        <TextInput
          fontSize={18}
          style={{color: 'black'}}
          placeholderTextColor={'black'}
          placeholder={toEnter}
          value={inputValue}
        />
      ) : (
        <TouchableOpacity
          onPress={showDropdown}
          style={{flex: 1, justifyContent: 'center', color: 'black'}}>
          <Text style={{fontSize: 18, color: 'black'}}>
            {inputValue ? inputValue : inputButton}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default CustomInput;
