import { USER_ENDPOINT } from "constants/apiURIs";
import { IRepositoryData } from "model/IRepository";
import { IBaseUserData, IUserData } from "model/IUser";

import http from "./httpService";

const getUsers = () => {
  return http.get<IBaseUserData[]>(`${USER_ENDPOINT}`);
};

const getUser = (userName: string) => {
  return http.get<IUserData>(`${USER_ENDPOINT}/${userName}`);
};

const getRepositories = (userName: string) => {
  return http.get<IRepositoryData[]>(`${USER_ENDPOINT}/${userName}/repos`, {
    params: {
      sort: "created",
      per_page: 20,
    },
  });
};

const getFollowers = (userName: string) => {
  return http.get<IBaseUserData[]>(`${USER_ENDPOINT}/${userName}/followers`);
};

const getFollowing = (userName: string) => {
  return http.get<IBaseUserData[]>(`${USER_ENDPOINT}/${userName}/following`);
};

export default { getUser, getUsers, getRepositories, getFollowers, getFollowing };
