import { useQuery } from "react-query";

import { tempKey } from "./queryKey";

import tempService from "services/tempService";

const fetchTemp = async () => {
  const { data } = await tempService.getTemp();

  return data;
};

const useTempQuery = () => {
  const query = useQuery(tempKey.list, () => fetchTemp());

  return { ...query, prices: query.data ?? [] };
};

export default useTempQuery;
