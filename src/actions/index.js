import { API_URL, LIMIT } from './../constant/constant';

function statusHelper(response) {
	if (response.status >= 200 && response.status < 300) {
		return Promise.resolve(response)
	} else {
		return Promise.reject(new Error(response.statusText))
	}
}

export function fetchServers() {
	return fetch(API_URL + `servers/?limit=${LIMIT}`)
		.then(statusHelper)
		.then(response => response.json());
}

export function fetchServerDetail({ id }) {
	return fetch(API_URL + `servers/${id}`)
		.then(statusHelper)
		.then(response => response.json());
}

export function fetchDiskDetail(id) {
	return fetch(API_URL + `disks/${id}`)
		.then(statusHelper)
		.then(response => response.json());
}
