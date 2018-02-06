import * as CONST from '../utils/Const';

export function startSpinner() {
	return { type: CONST.START_SPINNER };
}

export function stopSpinner() {
	return { type: CONST.STOP_SPINNER };
}