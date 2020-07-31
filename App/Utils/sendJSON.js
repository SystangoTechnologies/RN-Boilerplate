import Config from '../Config';

const { API } = Config;

function secureFetch(type, body = '') {
  if (type === 'GET' || type === 'DELETE') {
    return {
      method: type,
      headers: {
        Authorization: API.AUTH
      }
    };
  } else {
    return {
      method: type,
      headers: {
        Authorization: API.AUTH,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(body)
    };
  }
}

export function securePost(path, body) {
  return fetch(`${API.BASE}/${path}`, secureFetch('POST', body)).then((res) => {
    return res.json();
  });
}

export function securePut(path, body) {
  return fetch(`${API.BASE}/${path}`, secureFetch('PUT', body)).then((res) =>
    res.json()
  );
}

export function secureGet(path) {
  return fetch(`${API.BASE}/${path}`, secureFetch('GET')).then((res) => {
    return res.json();
  });
}

export function secureDelete(path) {
  return fetch(`${API.BASE}/${path}`, secureFetch('DELETE')).then((res) =>
    res.json()
  );
}
