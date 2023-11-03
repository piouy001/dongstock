import axios from "axios";

const baseURL = "/api";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = baseURL;

axios.interceptors.request.use(config => {
  config.headers.authorization = `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`;

  return config;
});

export default {
  get: axios.get,
  post: axios.post,
  patch: axios.patch,
  put: axios.put,
  delete: axios.delete,
  request: axios.request,
};
