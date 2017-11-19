import fetch from 'isomorphic-fetch';

const API_PREFIX = "http://localhost:8080/api/v1";

export function em_fetch (url, opts) {
  const newOpts = {
    ...opts,
    headers: {
      ...opts.headers,
      Authorization: "Token " + localStorage.getItem("ems_AuthKey")
    }
  }
  return fetch(API_PREFIX + url, opts)
    .then((res) => {
      if (res.ok) { return res.json(); }
      throw new Error(res.json());
    }).catch(res => res.json());
}

export const API = {
  fetch: em_fetch
}
