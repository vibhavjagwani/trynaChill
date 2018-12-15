import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import FBLoginButton from '../components/Buttons/FBLoginButton';


class HomeScreen extends Component {
   static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
      <Text>Tryna chill</Text>
        <FBLoginButton navigation = {this.props.navigation} />
        <Text>Tryna join? Login with facebook.</Text>
      </View>
    );
  }
}

module.exports = HomeScreen;