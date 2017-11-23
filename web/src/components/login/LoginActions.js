import { API } from "../../utils/FetchApi";
import Promise from "es6-promise";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export function handleLoginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    data: data,
    isAuthenticated: true,
  };
}

export const authenticate = loginData => {
  return (dispatch, getState) => {
    console.log("in action");
    return API.fetch("/auth/login/", { body: JSON.stringify(loginData), method: "POST" })
      .then(json => {
        localStorage.setItem("ems_AuthKey", json.token);
        dispatch(handleLoginSuccess(json));
        return Promise.resolve(true);
      })
      .catch(error => {
        console.log("error");
      });
  };
};
