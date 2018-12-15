import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton , AccessToken} from 'react-native-fbsdk';
import axios from 'axios';
import { AsyncStorage } from "react-native";

export default class FBLoginButton extends Component {
  render() {
    return (
      <View>
        <LoginButton
          readPermissions={["email","public_profile"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + error.message);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    axios.post("https://8ac5fca9.ngrok.io/api/auth/facebook/callback", {
                      access_token: data.accessToken,
                    }, {
                      headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                      }
                    }
                    )
                    .then(function(response) {
                      const {data} = response;
                        _storeData = async () => {
                          try {
                            await AsyncStorage.setItem('userId', data.user_id);
                            this.props.navigation.navigate('Profile');
                          } catch (error) {
                            // Error saving data
                            console.log(error.message);
                          }
                        }
                    })
                    .catch(function(err) {
                      console.log("fucking error");
                    })
                  }
                )
              }
            }
          }
          onLogoutFinished={() => alert("User logged out")}/>
      </View>
    );
  }
};

module.exports = FBLoginButton;