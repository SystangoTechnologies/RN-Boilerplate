import React from 'react';
import { connect } from 'react-redux';
import GoogleSignInComponent from './GoogleSignInComponent';
import * as userActions from '../../Actions/userActions';

const GoogleSignInContainer = (props) => {
  return <GoogleSignInComponent props={props} />;
};

const mapStateToProps = (state) => ({
  userData: state.UserLoginReducer.user
});

const mapDispatchToProps = (dispatch) => ({
  userLogin: () => dispatch(userActions.userLogin())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleSignInContainer);
