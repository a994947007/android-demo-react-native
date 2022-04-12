import React, { memo } from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native'
import CustomReactEditView from '../components/CustomReactEditView';

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
          <CustomReactEditView style={styles.reactEditView}/>
        </View>
      );
});

export default HeaderText;