import { useNavigate } from "react-router-dom";

export interface UserScreenRouter {
  navigateToUserScreen: (username: string) => void;
}

const useRouter = (): UserScreenRouter => {
  const navigate = useNavigate();

  const navigateToUserScreen = (userName: string) => {
    navigate(`/${userName}`);
  };

  return { navigateToUserScreen };
};

export default useRouter;
