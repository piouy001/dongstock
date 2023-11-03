import { useParams } from "react-router-dom";

import { DEFAULT_USER_ID } from "constants/user";
import useUserQuery from "queries/user/useUserQuery";

const useInteractor = () => {
  const { userName } = useParams();
  const query = useUserQuery(userName ?? DEFAULT_USER_ID);

  return {
    user: query.user,
    isLoading: query.isLoading,
  };
};

export default useInteractor;
