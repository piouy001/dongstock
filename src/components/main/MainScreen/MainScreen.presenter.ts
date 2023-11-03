import useInteractor from "./MainScreen.interactor";
import { MainScreenRouter } from "./MainScreen.router";

const usePresenter = (router: MainScreenRouter) => {
  const { users } = useInteractor();

  const handleUserItemClick = (username: string) => {
    router.navigateToUserScreen(username);
  };
  return { users, onUserItemClick: handleUserItemClick };
};

export default usePresenter;
