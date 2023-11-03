import { useQuery } from "react-query";

import { BaseUser } from "model/IUser";
import userService from "services/userService";

import { userKey } from "./queryKey";

const fetchUsers = async (): Promise<BaseUser[]> => {
  const { data } = await userService.getUsers();

  return data.map(datum => new BaseUser(datum));
};

const useUserQuery = () => {
  const query = useQuery(userKey.users, () => fetchUsers());

  return { ...query, users: query.data };
};

export default useUserQuery;
