import { put, call } from "redux-saga/effects";
import { statusCodes } from "react-native-google-signin";
import * as userActions from "../actions/userActions";
import { loginWithGoogle, signOut } from "../services/googleAuth";
import { CommonFetch } from '../services/api';
import * as CONST from '../utils/constants';

const opts = {
  method: '',
  url: null,
  body: null
  };

export function* userLogin(action) {
  opts.method = CONST.POST_API;
  opts.url = 'v1/auth';
  try {
    const res = yield call(CommonFetch, action.user, opts);
    if (res !== undefined) {
      yield put(userActions.userLoginSuccess(res));
    } else {
      yield put(userActions.userLoginFailure(res));
    }
  } catch (error) {
    yield put(userActions.userLoginFailure(error));
  }
}

export function* userSignup(action) {
  opts.method = CONST.POST_API;
  opts.url = 'v1/users';
  try {
    const res = yield call(CommonFetch, action.user, opts);
    if (res !== undefined) {
      console.log('response----', res)
      yield put(userActions.userSignupSuccess(res));
    } else {
      yield put(userActions.userSignupFailure(res));
    }
  } catch (error) {
    yield put(userActions.userSignupFailure(error));
  }
}

export function* userLogout() {
  try {
    yield call(signOut);
    yield put(userActions.userLogoutSuccess());
  } catch (error) {
    yield put(userActions.userLogoutFailure(error));
  }
}
