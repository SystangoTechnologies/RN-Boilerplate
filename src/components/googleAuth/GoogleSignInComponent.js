import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import {
  GoogleSignin, statusCodes
} from 'react-native-google-signin';
import firebase from 'react-native-firebase';
import NavigationService from '../../services/navigationService';
import * as CONST from '../../utils/constants';
import styles from './styles';

const Analytics = firebase.analytics();

export default function GoogleSignInComponent({ props }) {

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('Google Sign IN userInfo', userInfo);
      NavigationService.navigateAndReset('HomeTab');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      } else if (error.code === statusCodes.IN_PROGRESS) {
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      } else {
      }
    }
  };

  return (
    <TouchableOpacity onPress={() => signIn()} style={styles.googleSocialIcon}>
      <Image source={CONST.GOOGLE_PLUS_ICON} />
    </TouchableOpacity>
  );
}
