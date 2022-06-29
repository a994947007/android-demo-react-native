import React from 'react';
import {View, StyleSheet} from 'react-native'
import Follow from './src/pages/follow';
import Home from './src/pages/home';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 900,
    backgroundColor: '#F0F0F0',
    flex: 1
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <Follow />
    </View>
  );
}