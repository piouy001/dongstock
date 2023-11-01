import { useQuery } from "react-query";

import { authKey } from "./queryKey";

import authService from "services/authService";

const getAccessToken = async () => {
  const { data } = await authService.getAccessToken();

  return data;
};

const useGetAccessToken = () => {
  const query = useQuery(authKey.getAccessToken, () => getAccessToken());

  return query;
};

export default useGetAccessToken;
