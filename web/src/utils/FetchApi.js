import fetch from 'isomorphic-fetch';

const API_PREFIX = "http://localhost:8080";

export fetch function (url, opts) {
  const newOpts = {
    ...opts,
    headers: {
      ...opts.headers,
      Authorization: localStorage.getItem("ems_AuthKey");
    }
  }
  return fetch(API_PREFIX + url, opts).then(res => res.json());
}
