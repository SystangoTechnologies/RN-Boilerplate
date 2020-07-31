import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import analytics from '@react-native-firebase/analytics';
import * as userActions from '../../Actions/userActions';
import * as LanguageActions from '../../Actions/LanguageActions';
import SignupScreenComponent from './SignupScreenComponent';
import NavigationService from '../../Services/NavigationService';

const SignupScreenContainer = (props) => {
  const { prevProps } = props;

  useEffect(() => {
    analytics().setAnalyticsCollectionEnabled(true);
    analytics().setCurrentScreen('Sign_up', 'Signup');
    if (props !== prevProps && props.userData) {
      NavigationService.navigateAndReset('HomeTab');
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
