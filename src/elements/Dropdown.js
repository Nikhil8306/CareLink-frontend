import React, {useRef, useCallback, useMemo} from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import BottomSheet, {
  BottomSheetView,
  TouchableOpacity,
} from '@gorhom/bottom-sheet';

function Dropdown(props) {
  const {handleGender} = props;
  const bottomSheetRef = useRef(null);
  // const handleSheetChanges = useCallback(index => {
  //   console.log('handleSheetChanges', index);
  // }, []);

  return (
    <View style={styles.container}>
      <BottomSheet
        style={{flex: 1}}
        snapPoints={['100%']}
        enablePanDownToClose={true}
        enableDynamicSizing={true}
        ref={bottomSheetRef}
        // onChange={handleSheetChanges}
      >
        <BottomSheetView style={styles.contentContainer}>
          <TouchableOpacity
            onPress={() => {
              handleGender('Male');
            }}
            style={{
              width: 270,
              height: 50,
              // height: '40%',
              marginTop: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 18, color: 'black', fontWeight: '900'}}>
              Male🗿
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleGender('Female');
            }}
            style={{
              width: 270,
              height: 50,
              // height: '40%',
              marginTop: 10,

              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 18, color: 'black', fontWeight: '900'}}>
              Female🗿
            </Text>
          </TouchableOpacity>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

export default Dropdown;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    width: '100%',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#eeeeee',
    width: '100%',
  },
});
