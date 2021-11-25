// In App.js in a new project
import * as React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import backImg from '../../assets/images/splash_icon.png'
const SplashScreen = ({ navigation }) => {
  
  return (
    <ImageBackground source={backImg} style={styles.imageBackground}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title={"Get Started"}
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ImageBackground>

    
  ); 
}

const styles = StyleSheet.create({
  imageBackground: {
      flex: 1,
      flexDirection: 'column',
      resizeMode: 'cover',
      alignItems: 'center',
      justifyContent: 'center',
  },
})

SplashScreen.propTypes = {
  // isUserLoggedIn: PropTypes.bool.isRequired,
  // navigation: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  // isUserLoggedIn: state.user.isLoggedIn,
})

export default connect(
  mapStateToProps,
)(SplashScreen)
