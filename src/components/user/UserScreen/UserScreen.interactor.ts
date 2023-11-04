import { useParams } from "react-router-dom";

import useUserQuery from "queries/user/useUserQuery";

const useInteractor = () => {
  const { userName } = useParams();
  const query = useUserQuery(userName ?? "");

  return {
    user: query.user,
    isLoading: query.isLoading,
  };
};

export default useInteractor;
