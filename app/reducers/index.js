import {combineReducers} from 'redux';
import configureStore from '../stores/CreateStore';
import rootSaga from '../sagas';
import StartUpReducer from './StartUpReducer';

export default () => {
  const rootReducer = combineReducers({
    StartUpReducer,
  });

  return configureStore(rootReducer, rootSaga);
};
