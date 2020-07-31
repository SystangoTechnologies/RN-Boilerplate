import React from 'react';
import { connect } from 'react-redux';
import FBAuthComponent from './FBAuthComponent';
import * as userActions from '../../Actions/userActions';

const FBAuthContainer = (props) => {
  return <FBAuthComponent props={props} />;
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
)(FBAuthContainer);
