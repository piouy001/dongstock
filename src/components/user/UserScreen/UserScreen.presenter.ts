import useInteractor from "./UserScreen.interactor";
import { UserScreenRouter } from "./UserScreen.router";

const usePresenter = (router: UserScreenRouter) => {
  const interactor = useInteractor();

  const handleUserCardClick = (userName: string) => {
    router.navigateToUserScreen(userName);
  };

  return {
    user: interactor.user,
    isLoading: interactor.isLoading,
    repositories: interactor.repositories,
    followers: interactor.followers,
    following: interactor.following,
    onUserCardClick: handleUserCardClick,
  };
};

export default usePresenter;
