import React, { memo } from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native'
import RCTWrapReactEditView from '../components/RCTWrapReactEditView';

const styles = StyleSheet.create({
  reactEditContainer: {
    width: '100%',
    height: 200,
    display: 'flex',
    flex: 1,
  },
  reactEditView: {
    width: '100%',
    minHeight: 100,
    maxHeight: 200,
    backgroundColor: 'blue',
  },
});

const HeaderText = memo(() => {
    return (
        <View style={styles.reactEditContainer}>
          <RCTWrapReactEditView style={styles.reactEditView}/>
        </View>
      );
});

export default HeaderText;