import { useParams } from "react-router-dom";

import useFollowersQuery from "queries/user/useFollowersQuery";
import useFollowingQuery from "queries/user/useFollowingQuery";
import useRepositoriesQuery from "queries/user/useRepositoriesQuery";
import useUserQuery from "queries/user/useUserQuery";

const useInteractor = () => {
  const { userName } = useParams();
  const userQuery = useUserQuery(userName ?? "");
  const repositoriesQuery = useRepositoriesQuery(userName ?? "");
  const followersQuery = useFollowersQuery(userName ?? "");
  const followingQuery = useFollowingQuery(userName ?? "");

  const isLoading = [userQuery, repositoriesQuery, followersQuery].some(query => query.isLoading);

  return {
    user: userQuery.user,
    repositories: repositoriesQuery.repositories ?? [],
    followers: followersQuery.followers ?? [],
    following: followingQuery.following ?? [],
    isLoading: isLoading,
  };
};

export default useInteractor;
