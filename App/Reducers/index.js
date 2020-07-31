import { combineReducers } from 'redux';
import configureStore from '../Stores/CreateStore';
import rootSaga from '../Sagas';
import UserLoginReducer from './UserLoginReducer';
import StartUpReducer from './StartUpReducer';
import LanguageReducer from './LanguageReducer';
import BrandReducer from './BrandsReducer';

export default () => {
  const rootReducer = combineReducers({
    UserLoginReducer,
    StartUpReducer,
    LanguageReducer,
    BrandReducer
  });

  return configureStore(rootReducer, rootSaga);
};
