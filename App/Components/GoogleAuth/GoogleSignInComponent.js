import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import {
  GoogleSignin,
  statusCodes
} from '@react-native-community/google-signin';
import NavigationService from '../../Services/NavigationService';
import * as CONST from '../../Utils/Constants';
import styles from './styles';

export default function GoogleSignInComponent() {
  // const signIn = async () => {
  //   analytics().logEvent('login_method', { type: 'google', email: '' });
  //   const user = { name: 'dummy_name', password: 'dummy' };
  //   props.userLogin(user);
  // };

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('Google Sign IN userInfo', userInfo);
      NavigationService.navigateAndReset('HomeTab');
    } catch (error) {
      console.log('Google Sign error', error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  return (
    <TouchableOpacity onPress={() => signIn()} style={styles.googleSocialIcon}>
      <Image source={CONST.GOOGLE_PLUS_ICON} />
    </TouchableOpacity>
  );
}
