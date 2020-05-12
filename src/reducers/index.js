import { combineReducers } from 'redux';
import configureStore from '../stores/createStore';
import rootSaga from '../sagas';
import UserLoginReducer from './userLoginReducer';
import StartUpReducer from './startUpReducer';
import LanguageReducer from './languageReducer';

export default () => {
  const rootReducer = combineReducers({
    UserLoginReducer,
    StartUpReducer,
    LanguageReducer,
  });

  return configureStore(rootReducer, rootSaga);
};
