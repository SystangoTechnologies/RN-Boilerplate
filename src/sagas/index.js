import { takeLatest, all } from 'redux-saga/effects';
// import { startup } from './StartupSaga';
import { userLogin, userLogout, userSignup } from './userLoginSaga';
import * as CONST from '../utils/constants';

export default function* root() {
  yield all([
    // takeLatest(CONST.START_UP, startup),
    takeLatest(CONST.USER_LOGIN, userLogin),
    takeLatest(CONST.USER_LOGOUT, userLogout),
    takeLatest(CONST.USER_SIGNUP, userSignup),
  ]);
}
