import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileTabComponent from './ProfileTabComponent';
import * as userActions from '../../Actions/userActions';

class ProfileTabContainer extends Component {
  static navigationOptions = {
    title: 'Profile'
  };

  render() {
    const { message, userData, userLogout } = this.props;
    return (
      <ProfileTabComponent
        message={message}
        userData={userData}
        userLogout={userLogout}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  message: state.UserLoginReducer.message,
  userData: state.UserLoginReducer.user
});

const mapDispatchToProps = (dispatch) => ({
  userLogout: () => {
    return dispatch(userActions.userLogout());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileTabContainer);
