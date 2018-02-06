/**
 * @param {*} error : This is holding the error parameter
 */

function warn(error){
	throw error; // Calller will handle rejection
}

/**
 * This JS file holds the Promise which will be used for the actions to be done in camse of events
 */

module.exports = store => next => action => 
	typeof action.then === 'function'
		? Promise.resolve(action).then(next,warn)
		: next(action);