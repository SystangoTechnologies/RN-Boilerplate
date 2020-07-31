import React, { Component } from 'react';
import { connect } from 'react-redux';
import AboutUsTabComponent from './AboutUsTabComponent';
import * as userActions from '../../Actions/userActions';

class AboutUsTabContainer extends Component {
  static navigationOptions = {
    title: 'My Payment'
  };

  render() {
    const { message, userData, userLogout } = this.props;
    return (
      <AboutUsTabComponent
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
)(AboutUsTabContainer);
