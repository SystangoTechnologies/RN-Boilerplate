import { takeLatest, all } from 'redux-saga/effects';
// import startup from './StartupSaga';
import { userLogin, userLogout, userSignup } from './UserLoginSaga';
import getAllBrands from './BrandSaga';
import * as CONST from '../Utils/Constants';

export default function* root() {
  yield all([
    // takeLatest(CONST.START_UP, startup),
    takeLatest(CONST.USER_LOGIN, userLogin),
    takeLatest(CONST.USER_LOGOUT, userLogout),
    takeLatest(CONST.USER_SIGNUP, userSignup),
    takeLatest(CONST.GET_ALL_BRANDS, getAllBrands)
  ]);
}
