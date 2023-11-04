import { useParams } from "react-router-dom";

import useRepositoriesQuery from "queries/user/useRepositoriesQuery";
import useUserQuery from "queries/user/useUserQuery";

const useInteractor = () => {
  const { userName } = useParams();
  const userQuery = useUserQuery(userName ?? "");
  const repositoriesQuery = useRepositoriesQuery(userName ?? "");

  const isLoading = [userQuery, repositoriesQuery].some(query => query.isLoading);

  return {
    user: userQuery.user,
    repositories: repositoriesQuery.repositories ?? [],
    isLoading: isLoading,
  };
};

export default useInteractor;
