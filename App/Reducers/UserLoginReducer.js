import * as CONST from '../Utils/Constants';

const initialState = {
  user: null,
  message: ''
};

// This reducer stores the status of email verification.
export default function UserLoginReducer(state = initialState, action) {
  switch (action.type) {
    case CONST.USER_LOGIN:
      return {
        ...state,
        user: null,
        message: null
      };
    case CONST.USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        message: 'successfully logged in'
      };
    case CONST.USER_LOGIN_FAILED:
      return {
        ...state,
        user: null,
        message: 'error in login process'
      };

    case CONST.USER_SIGNUP:
      return {
        ...state,
        user: null,
        message: null
      };
    case CONST.USER_SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        message: 'successfully signed up'
      };
    case CONST.USER_SIGNUP_FAILED:
      return {
        ...state,
        user: null,
        message: 'error in signup process'
      };

    case CONST.USER_LOGOUT:
      return {
        ...state,
        message: ''
      };
    case CONST.USER_LOGOUT_SUCCESS:
      return {
        user: null,
        message: CONST.USER_LOGGED_OUT_SUCCESSFULLY
      };
    case CONST.USER_LOGOUT_FAILURE:
      return {
        message: CONST.ERROR_IN_LOGOUT
      };
    default:
      return state;
  }
}
