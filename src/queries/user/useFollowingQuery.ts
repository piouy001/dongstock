import { useQuery } from "react-query";

import { BaseUser } from "model/IUser";
import userService from "services/userService";

import { userKey } from "./queryKey";

const fetchFollowing = async (userName: string): Promise<BaseUser[]> => {
  const { data } = await userService.getFollowing(userName);

  return data.map(datum => new BaseUser(datum));
};

const useFollowingQuery = (userName: string) => {
  const query = useQuery(userKey.following(userName), () => fetchFollowing(userName));

  return { ...query, following: query.data };
};

export default useFollowingQuery;
