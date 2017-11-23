import fetch from "isomorphic-fetch";

const API_PREFIX = "http://localhost:8000/api/v1";

export function em_fetch(url, opts) {
  let token = localStorage.getItem("ems_AuthKey");
  const newOpts = {
    ...opts,
    headers: {
      ...opts.headers,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  console.log(token);
  if (token != null && token != "undefined") {
    newOpts.headers["Authorization"] = "Token " + token;
  }
  console.log(newOpts);
  return fetch(API_PREFIX + url, newOpts)
    .then(res => {
      console.log(res, res.ok);
      if (res.ok) {
        return res.json();
      }
      throw new Error(res.json());
    })
    .catch(res => {
      if (res.json) return res.json();
      else return res;
    });
}

export const API = {
  fetch: em_fetch,
};
