import { put, call } from 'redux-saga/effects';
import * as brandActions from '../Actions/brandActions';
import { CommonFetch } from '../Services/UserService';
import * as CONST from '../Utils/Constants';

const opts = {
  method: '',
  url: null,
  body: null
};

export default function* getAllBrands(action) {
  opts.method = CONST.GET_API;
  opts.url = 'v1/brands';
  try {
    const res = yield call(CommonFetch, action.user, opts);
    if (res !== undefined) {
      yield put(brandActions.getAllBrandsSuccess(res));
    } else {
      yield put(brandActions.getAllBrandsFailure(res));
    }
  } catch (error) {
    yield put(brandActions.getAllBrandsFailure(error));
  }
}
