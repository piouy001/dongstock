import { useQuery } from "react-query";

import { Repository } from "model/IRepository";
import userService from "services/userService";

import { userKey } from "./queryKey";

const fetchRepositories = async (userName: string): Promise<Repository[]> => {
  const { data } = await userService.getRepositories(userName);

  return data.map(datum => new Repository(datum));
};

const useRepositoriesQuery = (userName: string) => {
  const query = useQuery(userKey.repositories(userName), () => fetchRepositories(userName));

  return { ...query, repositories: query.data };
};

export default useRepositoriesQuery;
