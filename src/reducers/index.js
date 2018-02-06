import { combineReducers } from 'redux';
import commonReducer from './commonReducer';
import signinReducer from './signinReducer';

export default combineReducers({
  commonReducer,
	signinReducer,	
});