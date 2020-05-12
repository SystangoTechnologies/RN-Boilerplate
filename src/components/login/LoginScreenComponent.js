import React, { useState, useCallback } from 'react';
import {
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Text,
  View,
  Image,
  ImageBackground,
  Platform
} from 'react-native';
import firebase from 'react-native-firebase';
import { SignInWithAppleButton } from 'react-native-apple-authentication';
import Icons from 'react-native-vector-icons/Ionicons';
import GoogleSignInContainer from '../googleAuth/GoogleSignInContainer';
import FBAuthContainer from '../fbAuth/FBAuthContainer';
import Validators from '../../utils/validators';
import showToast from '../../utils/showToast';
import styles from './styles';
import * as CONST from '../../utils/constants';

const Analytics = firebase.analytics();
const enableGoogle = true;
const enableFb = true;
const enableApple = (Platform.OS === 'ios');

export default function LoginScreenComponent({ props, onSignupPressed }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const appleSignIn = (result) => {
    console.log('Resssult', result);
  };

  const onSubmit = useCallback(() => {
    if (Validators.isEmpty(email)) {
      showToast('Email is empty');
    } else if (!Validators.validEmail(email)) {
      showToast('Email is invalid');
    } else if (Validators.isEmpty(password)) {
      showToast('Password is empty');
    } else if (!Validators.isValidPassword(password)) {
      showToast('Password is invalid');
    } else {
      const user = { email, password };
      Analytics.logEvent('login_method', { type: 'email', email, platform: Validators.platform() });
      props.userLogin(user);
    }
  }, [email, password, props]);


  return (
      <ImageBackground source={CONST.APP_BACKGROUND} style={styles.loginContainer}>
        <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
          <Text style={styles.LoginText}>Login</Text>
          <View style={styles.inputContainer}>
            <View style={styles.emailContainer}>
              <Text style={styles.field}>Email</Text>
              <View style={{ flex: 1 }}>
                <TextInput
                  underlineColorAndroid="transparent"
                  returnKeyType="next"
                  // placeholder="Email"
                  value={email}
                  autoCapitalize="none"
                  onChangeText={(email) => setEmail(email)}
                  keyboardType="email-address"
                  style={styles.emailInput}
                />
              </View>
            </View>
          </View>
          <View style={styles.passContainer}>
            <Text style={styles.field}>Password</Text>
            <View style={{ flex: 1 }}>
              <TextInput
                underlineColorAndroid="transparent"
                returnKeyType="next"
                // placeholder={I18n.t('password')}
                value={password}
                autoCapitalize="none"
                secureTextEntry
                onChangeText={(password) => setPassword(password)}
                style={styles.emailInput}
              />
            </View>
            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.fieldText}>Forgot your password?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => onSignupPressed()} style={styles.signUp}>
              <Text style={styles.signUpText}>SIGN UP</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onSubmit()} style={styles.login}>
              <Text style={styles.loginText}>LOGIN</Text>
              <Icons name="ios-arrow-forward" size={20} color={CONST.WHITE_COLOR} />
            </TouchableOpacity>
          </View>
          <View style={styles.connectContainer}>
            <View style={styles.line} />
            <Text style={styles.fieldText}>Or connect with</Text>
          </View>
          <View style={styles.socialIconContainer}>
            <TouchableOpacity style={styles.fbSocialIcon}>
              <Image source={CONST.FB_ICON} />
            </TouchableOpacity>
            <View style={{ alignSelf: 'center', marginBottom: 10 }}>
              <GoogleSignInContainer props={props} />
            </View>
            <TouchableOpacity style={styles.instaSocialIcon}>
              <Image source={CONST.INSTA_ICON} />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
  );
}
