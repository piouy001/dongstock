import http from "./httpService";

import { DOMESTIC_ENDPOINT } from "constants/apiURIs";

const getDomesticPrices = () => {
  return http.get(`${DOMESTIC_ENDPOINT}inquire-price`);
};

export default { getDomesticPrices };
