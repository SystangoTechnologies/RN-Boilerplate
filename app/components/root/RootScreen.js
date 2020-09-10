import React, {Component} from 'react';
import {View, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import NavigationService from '../../services/NavigationService';
import AppNavigator from '../../navigators/AppNavigator';
import styles from './RootScreenStyle';
import startUp from '../../actions/StartUpActions';

class RootScreen extends Component {
  async componentDidMount() {
    this.props.startUp();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <AppNavigator
            // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  startUp: () => dispatch(startUp()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RootScreen);
