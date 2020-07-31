import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeTabComponent from './HomeTabComponent';
import * as userActions from '../../Actions/userActions';
import * as brandActions from '../../Actions/brandActions';

class HomeTabContainer extends Component {
  static navigationOptions = {
    title: 'Home'
  };

  constructor(props) {
    super(props);
    this.props.getAllBrands();
  }

  render() {
    const {
      message,
      userData,
      allBrands,
      userLogout,
      getAllBrands
    } = this.props;
    return (
      <HomeTabComponent
        message={message}
        userData={userData}
        allBrands={allBrands}
        getAllBrands={getAllBrands}
        userLogout={userLogout}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  message: state.UserLoginReducer.message,
  userData: state.UserLoginReducer.user,
  allBrands: state.BrandReducer.allBrands
});

const mapDispatchToProps = (dispatch) => ({
  userLogout: () => {
    return dispatch(userActions.userLogout());
  },
  getAllBrands: () => {
    return dispatch(brandActions.getAllBrands());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeTabContainer);
