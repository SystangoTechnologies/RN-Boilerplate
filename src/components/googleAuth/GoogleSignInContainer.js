import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import GoogleSignInComponent from './GoogleSignInComponent';
import * as userActions from '../../actions/userActions';

const GoogleSignInContainer = (props) => {
  return (
    <GoogleSignInComponent props={props} />
  );
};

GoogleSignInContainer.propTypes = {
  userData: PropTypes.object,
};

const mapStateToProps = (state) => ({
  userData: state.UserLoginReducer.user,
});

const mapDispatchToProps = (dispatch) => ({
  userLogin: () => dispatch(userActions.userLogin()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleSignInContainer);
