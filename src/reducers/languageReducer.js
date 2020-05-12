import { CHANGE_LANGUAGE } from '../utils/constants';

const initialState = { language: 'en' };

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE: {
      return { ...state, language: action.payload };
    }
    default:
      return state;
  }
}
