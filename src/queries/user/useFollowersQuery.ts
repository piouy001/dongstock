import { useQuery } from "react-query";

import { BaseUser } from "model/IUser";
import userService from "services/userService";

import { userKey } from "./queryKey";

const fetchFollowers = async (userName: string): Promise<BaseUser[]> => {
  const { data } = await userService.getFollowers(userName);

  return data.map(datum => new BaseUser(datum));
};

const useFollowersQuery = (userName: string) => {
  const query = useQuery(userKey.followers(userName), () => fetchFollowers(userName));

  return { ...query, followers: query.data };
};

export default useFollowersQuery;
