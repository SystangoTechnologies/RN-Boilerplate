import React from 'react';
import {connect} from 'react-redux';
import LandingScreenComponent from './LandingScreenComponent';

const LandingScreenContainer = props => {
  return <LandingScreenComponent props={props} />;
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LandingScreenContainer);
