import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from '../components/splash/SplashScreen';
import LoginScreenContainer from '../components/login/LoginScreenContainer';
import SignupScreenContainer from '../components/signup/SignupScreenContainer';


const StackNavigator = createStackNavigator(
  {
    SplashScreen: { screen: SplashScreen },
    LoginScreen: { screen: LoginScreenContainer },
    Signup: { screen: SignupScreenContainer }
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  }
);
export default createAppContainer(StackNavigator);
