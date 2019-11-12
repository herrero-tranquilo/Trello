import Axios from "axios";
import router from "../router";

const DOMAIN = "http://localhost:3000";
const UNAUTHORIZED = 401;
const NOTFOUND = 404;
const onUnauthorized = () => {
  router.push(`/login?rPath=${encodeURIComponent(location.pathname)}`);
};
const onNotFound = () => {
  router.replace("/404");
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
      if (status === NOTFOUND) onNotFound();
      // throw result.response;
    });
};
export const setAuthInHeader = token => {
  Axios.defaults.headers.common["Authorization"] = token
    ? `Bearer ${token}`
    : null;
};

export const board = {
  create(title) {
    return req("post", "/boards", { title });
  },
  fetch(id) {
    return id ? req("get", `/boards/${id}`) : req("get", "/boards");
  },
  update(id, payload) {
    return req("put", `/boards/${id}`, payload);
  },
  destroy(id) {
    return req("delete", `/boards/${id}`);
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
