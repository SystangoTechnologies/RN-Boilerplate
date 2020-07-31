import * as CONST from '../Utils/Constants';

const initialState = {
  allBrands: null
};

// This reducer stores the status of email verification.
export default function BrandsReducer(state = initialState, action) {
  switch (action.type) {
    case CONST.GET_ALL_BRANDS:
      return {
        ...state,
        allBrands: null
      };
    case CONST.GET_ALL_BRANDS_SUCCESS:
      return {
        ...state,
        allBrands: action.payload
      };
    case CONST.GET_ALL_BRANDS_FAILED:
      return {
        ...state
      };
    default:
      return state;
  }
}
