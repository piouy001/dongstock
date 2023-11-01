import { useQuery } from "react-query";

import { domesticKey } from "./queryKey";

import domesticService from "services/domesticService";

const fetchDomesticPrices = async () => {
  // const { data } = await domesticService.getDomesticPrices();
  //   return data.map(item => new DomesticPriceItem(item));
};

const useDomesticPricesQuery = () => {
  const query = useQuery(domesticKey.prices, () => fetchDomesticPrices());

  return { ...query, prices: query.data ?? [] };
};

export default useDomesticPricesQuery;
