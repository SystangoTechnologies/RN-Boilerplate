import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import analytics from '@react-native-firebase/analytics';
import * as userActions from '../../Actions/userActions';
import * as LanguageActions from '../../Actions/LanguageActions';
import LoginScreenComponent from './LoginScreenComponent';
import NavigationService from '../../Services/NavigationService';

const LoginScreenContainer = (props) => {
  const { prevProps } = props;

  useEffect(() => {
    analytics().setAnalyticsCollectionEnabled(true);
    analytics().setCurrentScreen('Log_In', 'Login');
    if (props !== prevProps && props.userData) {
      NavigationService.navigateAndReset('HomeTab');
    }
  }, [prevProps, props]);

  const onSignupPressed = () => {
    NavigationService.navigate('Signup');
  };

  return (
    <LoginScreenComponent
      props={props}
      onSignupPressed={() => onSignupPressed()}
    />
  );
};

const mapStateToProps = (state) => ({
  userData: state.UserLoginReducer.user,
  lang: state.LanguageReducer.language
});

const mapDispatchToProps = (dispatch) => ({
  userLogin: (user) => {
    return dispatch(userActions.userLogin(user));
  },
  changeLanguage: (lang) => {
    return dispatch(LanguageActions.changeLanguage(lang));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreenContainer);
