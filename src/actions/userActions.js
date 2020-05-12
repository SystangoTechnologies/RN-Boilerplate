import * as CONST from '../utils/constants';

export function userLogin(user) {
  return {
    type: CONST.USER_LOGIN,
    user
  };
}
export function userLoginSuccess(user) {
  user = {
    ...user,
    ...{
      fname: 'Hemant',
      lname: 'Parihar',
      email: 'hemant.parihar18@gmail.com',
      city: 'Indore',
      state: 'MP',
      country: 'India'
    }
  };
  return {
    type: CONST.USER_LOGIN_SUCCESS,
    payload: {
      user
    }
  };
}
export function userLoginFailure(error) {
  return {
    type: CONST.USER_LOGIN_FAILURE,
  };
}

export function userLogout() {
  return {
    type: CONST.USER_LOGOUT,
  };
}

export function userLogoutSuccess() {
  return {
    type: CONST.USER_LOGOUT_SUCCESS,
  };
}

export function userLogoutFailure() {
  return {
    type: CONST.USER_LOGOUT_FAILURE,
  };
}

/**
 * Signup
 */

export function userSignup(user) {
  return {
    type: CONST.USER_SIGNUP,
    user
  };
}
export function userSignupSuccess(user) {
  return {
    type: CONST.USER_SIGNUP_SUCCESS,
    payload: {
      user
    }
  };
}
export function userSignupFailure(error) {
  return {
    type: CONST.USER_SIGNUP_FAILURE,
  };
}
