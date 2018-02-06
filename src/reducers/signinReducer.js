/**
 * @author Systango Technologies Pvt Ltd
 * Date: Dec 21 2017
 *
 * AUTHENTICATION REDUCER !
 *
 */
import * as CONST from '../utils/Const';

const initialState ={
	token:null,
	id:'',
	email: '',
	fName: '',
	lName: '',
	accountType: '',
	status: false,
	message: '',
};

export default function(state = initialState, action){
	switch(action.type){
	case CONST.SIGNIN:
		return{
			...state,
			status: false,
			message: action.payload.message,
		};
	case CONST.RESET_SIGNIN:
		return{
			...state,
			status: false,
			message: '',
		};
	case CONST.SIGNIN_SUCCESS:
		return{
			...state,
			/*token: action.payload.user.access_token,
			id: action.payload.user.id,
			email: action.payload.user.email,
			fName: action.payload.user.first_name,
			lName: action.payload.user.last_name,
			accountType: action.payload.user.account_type,
			status: action.payload.success,
			message: action.payload.message,*/
		};
	case CONST.SIGNIN_FAILED:
		return{
			...state,
			email: '',
			id:'',
			token:'',
			status: action.payload.success,
			message: action.payload.message,
		};
	default: return state;
	}
}
