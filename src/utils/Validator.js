import React, { Component } from 'react';
import {
	Platform,
	NetInfo
} from 'react-native';
class Validators {
	static validEmail(email) {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}

	static validPassword(password) {
		if (password.length < 5) {
			return false;
		}
		return true;
	}

	static validPhoneNumber(number) {
		var re = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/gm;
		if (!re.test(number)) {
			return false;
		}
		return true;
	}

	static validMobileNumber(number) {
		if (number.length != 10) {
			return true;
		}
		return false;
	}

	static isEmpty(name) {
		if (name && name.trim() != '') {
			return false;
		}
		return true;
	}

	static onlyAlphabets(value) {
		let flag = /[^0-9\s]|^\S+$]/;
		return flag.test(value);
	}
	static isNetworkConnected() {
		if (Platform.OS === 'ios') {
			return new Promise(resolve => {
				const handleFirstConnectivityChangeIOS = isConnected => {
					NetInfo.isConnected.removeEventListener(
						'change',
						handleFirstConnectivityChangeIOS
					);
					resolve(isConnected);
				};
				NetInfo.isConnected.addEventListener(
					'change',
					handleFirstConnectivityChangeIOS
				);
			});
		}

		return NetInfo.isConnected.fetch().then(isConnected => { return isConnected;});
	}
}
  
  
export default Validators;
  