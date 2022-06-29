import React from 'react';
import {View, StyleSheet, Text} from 'react-native'
import BottomSheetLayout from './src/components/BottomSheetLayout';
import HeaderText from './src/components/HeaderTextView';

const styles = StyleSheet.create({
  bottomSheetContainer: {
    width: '100%',
    height: 200,
    display: 'flex',
    backgroundColor: 'blue',
  },
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    flex: 1,
  },
  editStyle: {
    width: '100%',
    minHeight: 100,
    maxHeight: 200,
    position: 'absolute',
    backgroundColor: 'red',
  },
  title: {
    fontSize: 22,
    alignSelf:'center',
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>这是一个RN页面</Text>
      <BottomSheetLayout style={styles.bottomSheetContainer}>
        <HeaderText style={styles.editStyle}/>  
      </BottomSheetLayout>
    </View>
  );
}