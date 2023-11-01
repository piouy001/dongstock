import axios from "axios";

const baseURL = import.meta.env.VITE_API_ROOT;
let globalAccessToken: string | null = null;

axios.defaults.withCredentials = true;
axios.defaults.baseURL = baseURL;

axios.interceptors.request.use(config => {
  config.headers.appkey = import.meta.env.VITE_APP_KEY;
  config.headers.appsecret = import.meta.env.VITE_APP_SECRET_KEY;
  if (globalAccessToken != null) {
    config.headers.authorization = `Bearer ${globalAccessToken}`;
  }

  return config;
});

const updateAccessToken = async (accessToken: string) => {
  globalAccessToken = accessToken;
};

const checkAndUpdateAccessToken = (accessToken: string) => {
  if (accessToken) {
    updateAccessToken(accessToken);
    return true;
  }

  return false;
};

const getAccessToken = async () => {
  try {
    if (globalAccessToken === null) {
      throw new Error("access token doesn't exist");
    }
    return Promise.resolve(globalAccessToken);
  } catch (error) {
    console.log(error);
  }
};

const removeAccessToken = async () => {
  try {
    globalAccessToken = null;
  } catch (error) {
    console.log(error);
  }
};

export default {
  checkAndUpdateAccessToken,
  getAccessToken,
  removeAccessToken,
  get: axios.get,
  post: axios.post,
  patch: axios.patch,
  put: axios.put,
  delete: axios.delete,
  request: axios.request,
};
