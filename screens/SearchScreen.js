import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Searchscreen extends Component {
    render() {
      return (
        <View style={styles.screenContainer}>
          <Text>Search</Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    screenContainer: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
    }
  })