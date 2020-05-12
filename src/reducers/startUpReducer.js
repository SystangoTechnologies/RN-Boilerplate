import * as CONST from '../utils/constants';

const initialState = {
  data: null
};

// This reducer stores the status of email verification.
export default function (state = initialState, action) {
  switch (action.type) {
    case CONST.START_UP:
      return {
        ...state,
        data: null
      };
    default:
      return state;
  }
}
