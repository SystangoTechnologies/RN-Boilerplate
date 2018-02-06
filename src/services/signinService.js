'use strict';
import { securePost } from '../utils/sendJSON';
import * as CONST from '../utils/Const';
import AsyncStorageUtil from '../utils/asyncStore';


export function saveAuthToken(authToken) {
	AsyncStorageUtil.setAsyncStorage(CONST.AUTH_TOKEN_KEY, authToken);
}

export function signin(email, password, callback){
	let token = '';
	securePost('users/login', token,{
		'login': email,
		'password': password
	}).then(([response, data]) =>{
		console.log('loginservice login response ', response);
		if (response.status === 200 && data.success) {
			saveAuthToken(data.user.access_token);
			callback({result: 'SUCCESS', data: data });
		} else {
			callback({
				result: 'FAILED',
				data: data,
			});
		}
	}).catch((error) => {
		console.log('loginservice login error ', error.message);
		callback({
			result: 'FAILED',
			data: error,
		});
	});
}