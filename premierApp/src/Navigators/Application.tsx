import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { SafeAreaView, StatusBar, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { SplashScreen, LoginScreen, RegisterScreen } from '@/Containers'

import { useTheme } from '@/Hooks'
import DrawerNavigation from './DrawerNavigation'
import { navigationRef } from './utils'
import AbeLogo from '../../assets/images/Group 80095.png'

const Stack = createStackNavigator()
function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={AbeLogo}
    />
  );
}
// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme


  const Auth = () => {
    // Stack Navigator for Login and Sign up Screen
    return (
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            title: 'Register', //Set Header Title
            headerStyle: {
              backgroundColor: '#307ecc', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
    );
  };

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator screenOptions={{ headerShown: true }} initialRouteName="Splash">
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Auth" component={Auth} 
              options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Main"
            component={DrawerNavigation}
            options={{
              animationEnabled: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

const mapStateToProps = (state) => ({
  // isUserLoggedIn: state.user.isLoggedIn,
})

export default connect(
  mapStateToProps
)(ApplicationNavigator)