export default function( body ) {
	return {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json', 
			'Accept': 'application/json'
		},
		body: JSON.stringify( body )
	};
}
