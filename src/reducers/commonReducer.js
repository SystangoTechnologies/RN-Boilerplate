import * as CONST from '../utils/Const';

const initialState = {
	isFetching: false
};

export default function(state = initialState, action) {
	switch (action.type) {
	case CONST.START_SPINNER:
		return {
			...state,
			isFetching: true
		};
	case CONST.STOP_SPINNER:
		return {
			...state,
			isFetching: false
		};
	default:
		return state;
	}
}
