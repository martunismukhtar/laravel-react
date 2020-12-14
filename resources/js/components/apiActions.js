import axios from 'axios';

export function getAPI(apiUrl) {
	return (dispatch) => {
		return axios.get(apiUrl);
	};
}

export function postAPI(apiUrl, data, config = null) {
	return (dispatch) => {
		if (config === null) {
			return axios.post(apiUrl, data);
		} else {
			return axios.post(apiUrl, data, config);
		}
	};
}

export function putApi(apiUrl, data, config) {
	return (dispatch) => {
		if (config === null) {
			return axios.put(apiUrl, data);
		} else {
			return axios.put(apiUrl, data, config);
		}
	};
}

export function deleteAPI(apiUrl) {
	return (dispatch) => {
		return axios.delete(apiUrl);
	};
}
