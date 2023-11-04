import { useNavigate } from "react-router-dom";

import { ERROR_URL } from "constants/URLConstant";

export interface UserScreenRouter {
  navigateToUserScreen: (username: string) => void;
  navigateToErrorScreen: () => void;
}

const useRouter = (): UserScreenRouter => {
  const navigate = useNavigate();

  const navigateToUserScreen = (userName: string) => {
    navigate(`/${userName}`);
  };

  const navigateToErrorScreen = () => {
    navigate(ERROR_URL);
  };

  return { navigateToUserScreen, navigateToErrorScreen };
};

export default useRouter;
