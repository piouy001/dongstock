import { useNavigate } from "react-router-dom";

export interface MainScreenRouter {
  navigateToUserScreen: (username: string) => void;
}

const useRouter = (): MainScreenRouter => {
  const navigate = useNavigate();

  const navigateToUserScreen = (userName: string) => {
    navigate(userName);
  };

  return { navigateToUserScreen };
};

export default useRouter;
