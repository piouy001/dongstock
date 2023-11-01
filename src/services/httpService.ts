import axios from "axios";

const baseURL = "/api";
let globalAccessToken: string | null = null;

axios.defaults.withCredentials = true;
axios.defaults.baseURL = baseURL;

axios.interceptors.request.use(config => {
  config.headers.authorization = `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`;

  if (globalAccessToken !== null) {
  }

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
