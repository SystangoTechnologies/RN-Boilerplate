import * as CONST from '../Utils/Constants';

export function getAllBrands() {
  console.log('HEre1111111');
  return {
    type: CONST.GET_ALL_BRANDS
  };
}
export function getAllBrandsSuccess(res) {
  return {
    type: CONST.GET_ALL_BRANDS_SUCCESS,
    payload: res
  };
}
export function getAllBrandsFailure() {
  return {
    type: CONST.GET_ALL_BRANDS_FAILURE
  };
}
