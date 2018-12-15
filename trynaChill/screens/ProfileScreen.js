import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class ProfileScreen extends Component<Props> {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
      <Text>Tryna Tryna Tryna</Text>
      </View>
    );
  }
}

module.exports = ProfileScreen;
