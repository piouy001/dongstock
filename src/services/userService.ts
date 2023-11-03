import { USER_ENDPOINT } from "constants/apiURIs";
import { IUserData } from "model/IUser";

import http from "./httpService";

const getUsers = () => {
  return http.get<IUserData>(`${USER_ENDPOINT}/users`);
};

const getUser = (userName: string) => {
  return http.get<IUserData>(`${USER_ENDPOINT}/${userName}`);
};

export default { getUser };
