/**
 * @author: Systango Pvt Ltd
 * Date: Dec 21 2017
 * 
 * AUTHENTICATION ACTIONS -LOGIN,SIGNUP, AND LOGOUT !
 */
import {signin} from '../services/signinService';
import { startSpinner, stopSpinner} from './commonAction';
import * as CONST from '../utils/Const';

export function signinAct(email, password){
    return async(dispatch, getState) => {
        dispatch(startSpinner());
        dispatch({type: CONST.RESET_SIGNIN});
        try{
            await signin(email, password, (response) => {
                if(response.result === 'SUCCESS'){
                    dispatch(stopSpinner());
                    response.data.email = email;
                    dispatch({
                        type: CONST.SIGNIN_SUCCESS,
                        payload: response.data,
                    });
                }
                else if(response.result === 'FAILED'){
                    dispatch(stopSpinner());
                    dispatch({
                        type: CONST.SIGNIN_FAILED,
                        payload: response.data,
                    })
                }
            })
        } catch(err){
            dispatch(stopSpinner());
            dispatch({
                type: CONST.LOGIN_FAILED,
                payload: err,
            })
        }
    }
}
