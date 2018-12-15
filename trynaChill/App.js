/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import FBLoginButton from './components/Buttons/FBLoginButton';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator(
{
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen }
},
{
  initialRouteName:"Home"
});

// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//       <Text>Tryna chill</Text>
//         <FBLoginButton>
//         </FBLoginButton>
//         <Text style={styles.instructions}>Tryna join? Login with facebook.</Text>
//       </View>
//     );
//   }
// }

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
