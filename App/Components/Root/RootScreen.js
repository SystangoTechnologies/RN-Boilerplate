import React, { Component } from 'react';
import { View, SafeAreaView, Alert } from 'react-native';
import { connect } from 'react-redux';
import messaging, { firebase } from '@react-native-firebase/messaging';

import NavigationService from '../../Services/NavigationService';
import AppNavigator from '../../Navigators/AppNavigator';
import styles from './RootScreenStyle';
import startUp from '../../Actions/startUpActions';
import AsyncStorageUtil from '../../Utils/asyncStorage';

class RootScreen extends Component {
  async componentDidMount() {
    this.props.startUp();
    await this.getFCMToken();
    await this.checkNotificationPermission();
    await this._registerMessageHandlers();
  }

  _registerMessageHandlers() {
    // Assume a message-notification contains a "type" property in the data payload of the screen to open
    this.noificationOpened = messaging().onNotificationOpenedApp(
      (remoteMessage) => {
        console.warn(
          '*** Notification caused app to open from background state:',
          remoteMessage.notification
        );
      }
    );

    // Invokes when the app is in foreground.
    this.messageListener = messaging().onMessage((remoteMessage) => {
      console.warn('*** Notification on message', remoteMessage);
    });

    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.warn('*** Message handled in the background!', remoteMessage);
    });

    // Check whether an initial notification is available
    this.getInitialNotification = messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          console.warn(
            '*** Notification caused app to open from quit state:',
            remoteMessage.notification
          );
        }
      });
  }

  getFCMToken = async () => {
    await messaging()
      .getToken()
      .then((fcmToken) => {
        if (fcmToken) {
          console.log('$$$$$ DEVICE TOKEN:', fcmToken);
          AsyncStorageUtil.setAsyncStorage('DEVICE_TOKEN', fcmToken);
        }
      })
      .catch((error) => {
        console.error('$$$$$ DEVICE TOKEN ERROR:', error);
      });
  };

  async checkNotificationPermission() {
    const permissionStatus = await messaging().hasPermission();
    let result = false;
    if (
      permissionStatus === firebase.messaging.AuthorizationStatus.NOT_DETERMINED
    ) {
      try {
        const newStatus = await messaging().requestPermission();
        switch (newStatus) {
          case firebase.messaging.AuthorizationStatus.DENIED:
            Alert.alert('You will not receive push notifications.');
            result = false;
            break;
          case firebase.messaging.AuthorizationStatus.AUTHORIZED:
            result = true;
            break;
          case firebase.messaging.AuthorizationStatus.PROVISIONAL:
            Alert.alert('You will receive notifications silently.');
            result = true;
            break;
          default:
            break;
        }
      } catch (error) {
        console.error('Error while requesting notification permissions', error);
        result = false;
      }
    } else if (
      permissionStatus === firebase.messaging.AuthorizationStatus.AUTHORIZED
    ) {
      result = true;
    }
    return result;
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <AppNavigator
            // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
            ref={(navigatorRef) => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  startUp: () => dispatch(startUp())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootScreen);
