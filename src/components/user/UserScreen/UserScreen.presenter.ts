import useInteractor from "./UserScreen.interactor";
import { UserScreenRouter } from "./UserScreen.router";

const usePresenter = (router: UserScreenRouter) => {
  const interactor = useInteractor();

  // view models, event handlers for the screen.
  return {
    user: interactor.user,
  };
};

export default usePresenter;
