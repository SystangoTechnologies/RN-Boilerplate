/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux'
import configureStore from './src/configureStore';
import Orientation from 'react-native-orientation';
import Home from './src/Home'
import Spinner from '@components/Spinner'

export default class App extends Component<{}> {

  constructor (props) {
    super(props)
    this.state = {
      store: configureStore(() => {
				console.log('Store persisted !');
			})
    }
  }

  componentDidMount(){
    Orientation.lockToPortrait();
  }
/**
 * A loading indicator to show any process is under progress and UI can be blocked during that duration.
 */
  spinner() {
    return (
      <Spinner/>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Provider store = {this.state.store}>
          <View style={styles.container}>
          <Home/>
          {this.spinner()}
          </View>
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
