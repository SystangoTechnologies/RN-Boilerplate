import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import * as userActions from '../../actions/userActions';
import * as LanguageActions from '../../actions/languageActions';
import SignupScreenComponent from './SignupScreenComponent';
import NavigationService from '../../services/navigationService';

const Analytics = firebase.analytics();

const SignupScreenContainer = (props) => {
  const { prevProps } = props;

  useEffect(() => {
    Analytics.setAnalyticsCollectionEnabled(true);
    Analytics.setCurrentScreen('Sign_up', 'Signup');
    if (props != prevProps && props.userData) {
      NavigationService.navigateAndReset('LoginScreen');
    }
  }, [prevProps, props]);

  return <SignupScreenComponent props={props} />;
};

const mapStateToProps = (state) => ({
  userData: state.UserLoginReducer.user,
  lang: state.LanguageReducer.language
});

const mapDispatchToProps = (dispatch) => ({
  userSignup: (user) => {
    return dispatch(userActions.userSignup(user));
  },
  changeLanguage: (lang) => {
    return dispatch(LanguageActions.changeLanguage(lang));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupScreenContainer);
