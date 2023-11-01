import http from "./httpService";

import { AUTH_ENDPOINT } from "constants/apiURIs";

interface AccessTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

const getAccessToken = () => http.post<AccessTokenResponse>(`${AUTH_ENDPOINT}tokenP`);

const handleAccessToken = (data: AccessTokenResponse) => {
  if (!http.checkAndUpdateAccessToken(data?.access_token)) {
    return false;
  }

  return true;
};

export default { getAccessToken, handleAccessToken };
