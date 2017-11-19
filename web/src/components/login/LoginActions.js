import fetch from "../../utils/FetchApi";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export function handleLoginSuccess () {
	return {
		type: LOGIN_SUCCESS,
		data: response.data,
		isAuthenticated: true
	}
}

export const authenticate = loginData => {
	return (dispatch, getState) => {
		return fetch("/auth/login", loginData).then((json) => {
			localStorage.setItem('ems_AuthKey', json.token);
			dispatch(handleLoginSuccess());
			return Promise.resolve(true);
		}).catch((res) => {
			// Need to handle error scenarios better here;
			console.log(res.message);
		});
	};
};
