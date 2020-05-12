import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import FBAuthComponent from './FBAuthComponent';
import * as userActions from '../../actions/userActions';

const FBAuthContainer = (props) => {
  return (
    <FBAuthComponent props={props} />
  );
};

FBAuthContainer.propTypes = {
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
)(FBAuthContainer);
