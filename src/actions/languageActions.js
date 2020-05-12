import * as CONST from '../utils/constants';

export function changeLanguage(lang= 'en') {
  return {
    type: CONST.CHANGE_LANGUAGE,
    payload: lang
  };
}
