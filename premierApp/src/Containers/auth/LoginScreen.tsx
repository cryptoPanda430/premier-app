// In App.js in a new project
import * as React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DefaultPage from '../layout/DefaultPage'
import logo from '../../../assets/images/pick3d.png'
const LoginScreen= ({navigation}) => {
  console.log("login")
  return (
    <DefaultPage>
      <View>
        <Image
              source={logo}
              style = {styles.logo}
          />
        
      </View>
       
    </DefaultPage>
  ); 
}
const styles = StyleSheet.create({
  logo: {
    width: 378,
    height: 187,
},
  buttonSettings: {
      position: 'absolute',
      top: 10,
      left: 10,
  },
  buttonExit: {
      position: 'absolute',
      top: 15,
      right: 15,
  },
  versionTag: {
      position: 'absolute',
      bottom: 10,
      left: 10,
  },
})

export default LoginScreen;