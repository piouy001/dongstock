import { useQuery } from "react-query";

import { User } from "model/IUser";
import userService from "services/userService";

import { userKey } from "./queryKey";

const fetchUser = async (userName: string): Promise<User> => {
  const { data } = await userService.getUser(userName);

  return new User(data);
};

const useUserQuery = (userName: string) => {
  const query = useQuery(userKey.user(userName), () => fetchUser(userName));

  return { ...query, user: query.data };
};

export default useUserQuery;
