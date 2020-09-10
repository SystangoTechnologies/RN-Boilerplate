import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import createStore from './reducers';
import RootScreen from './components/root/RootScreen';
import SplashScreen from 'react-native-splash-screen';

const {store, persistor} = createStore();

export default class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootScreen />
        </PersistGate>
      </Provider>
    );
  }
}
