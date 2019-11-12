import Axios from "axios";
import router from "../router";
import { request } from "https";

const DOMAIN = "http://localhost:3000";
const UNAUTHORIZED = 401;
const onUnauthorized = () => {
  router.push(`/login?rPath=${encodeURIComponent(location.pathname)}`);
};
const req = (method, url, data) => {
  return Axios({
    method,
    url: DOMAIN + url,
    data
  })
    .then(result => result.data)
    .catch(result => {
      const { status } = result.response;
      if (status === UNAUTHORIZED) onUnauthorized();
      throw result.response;
    });
};
export const setAuthInHeader = token => {
  Axios.defaults.headers.common["Authorization"] = token
    ? `Bearer ${token}`
    : null;
};

export const board = {
  fetch(id) {
    return id ? req("get", `/boards/${id}`) : req("get", "/boards");
  },
  create(title) {
    return req("post", "/boards", { title });
  }
};
export const auth = {
  login(email, password) {
    return req("post", "/login", { email, password });
  }
};

export const card = {
  create(title, listId, pos) {
    return req("post", "/cards", { title, listId, pos });
  },
  fetch(id) {
    return req("get", `/cards/${id}`);
  },
  update(id, payload) {
    return req("put", `/cards/${id}`, payload);
  },
  destroy(id) {
    return req("delete", `/cards/${id}`);
  }
};
