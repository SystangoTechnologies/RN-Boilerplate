import {combineReducers} from 'redux';
import configureStore from '../Stores/CreateStore';
import rootSaga from '../Sagas';
import StartUpReducer from './StartUpReducer';

export default () => {
  const rootReducer = combineReducers({
    StartUpReducer,
  });

  return configureStore(rootReducer, rootSaga);
};
