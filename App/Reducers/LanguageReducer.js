import { CHANGE_LANGUAGE } from '../Utils/Constants';
// import { getCurrentLocale } from "../i18n/index";

const initialState = { language: 'en' };

export default function LanguageReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE: {
      return { ...state, language: action.payload };
    }
    default:
      return state;
  }
}
