import { USER_ENDPOINT } from "constants/apiURIs";
import { IBaseUserData, IUserData } from "model/IUser";

import http from "./httpService";

const getUsers = () => {
  return http.get<IBaseUserData[]>(`${USER_ENDPOINT}`);
};

const getUser = (userName: string) => {
  return http.get<IUserData>(`${USER_ENDPOINT}/${userName}`);
};

export default { getUser, getUsers };
