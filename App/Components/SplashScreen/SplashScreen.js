import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {connect} from 'react-redux';
import styles from './SplashScreenStyle';
import NavigationService from '../../Services/NavigationService';
import {Images} from '../../Theme';

function SplashScreen(props) {
  useEffect(() => {
    setTimeout(() => {
      const {navigation} = props;
      NavigationService.navigateAndReset('LandingScreen', navigation);
    }, 2000);
  });

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={Images.logo} />
      </View>
    </View>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SplashScreen);
