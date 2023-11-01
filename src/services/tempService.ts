import http from "./httpService";

import { TEMP_ENDPOINT } from "constants/apiURIs";

const getTemp = () => {
  return http.get(`${TEMP_ENDPOINT}list`);
};

export default { getTemp };
