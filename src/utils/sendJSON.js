import API from './config';
import fetchBody from './fetchBody';


async function sendJSON( path, body ) {
  return await fetch(`${API.BASE}/${path}`, fetchBody(body)).then((response) => {
	  return Promise.all([Promise.resolve(response), response.json()]);
  });
}

function secureFetch(type, token, body=''){
	if(type === 'GET' || type === 'DELETE'){
		return {
		method: type,
		headers: {
			'Authorization': API.AUTH
		},
	};
	}else{
		return {
		method: type,
		headers: {
			'Authorization': API.AUTH,
      'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		body: JSON.stringify( body )
	};
	}
}

export async function securePost(path, token='', body){
	console.log('#### api url : ',`${API.BASE}/${path}`);
	return await fetch(`${API.BASE}/${path}`, secureFetch('POST', token, body)).then((response) => {
	return Promise.all([Promise.resolve(response), response.json()]);
  });
}

export async function securePut(path, token='', body){
	return await fetch(`${API.BASE}/${path}`, secureFetch('PUT', token, body)).then((response) => {
	return Promise.all([Promise.resolve(response), response.json()]);
  });
}

export async function secureGet(path, token=''){
  return await fetch(`${API.BASE}/${path}`, secureFetch('GET', token)).then((response) => {
	  return Promise.all([Promise.resolve(response), response.json()]);
  });
}

export async function secureDelete(path, token=''){
	return await fetch(`${API.BASE}/${path}`, secureFetch('DELETE', token)).then((response) => {
	  return Promise.all([Promise.resolve(response), response.json()]);
  });
}


export default sendJSON;
