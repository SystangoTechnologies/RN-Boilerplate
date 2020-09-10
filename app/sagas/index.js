import {takeLatest, all} from 'redux-saga/effects';
import startup from './StartupSaga';
import * as CONST from '../utils/Constants';

export default function* root() {
  yield all([takeLatest(CONST.START_UP, startup)]);
}
