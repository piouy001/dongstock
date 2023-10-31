import useInteractor from "./MainScreen.interactor";
import { MainScreenRouter } from "./MainScreen.router";

const usePresenter = (router: MainScreenRouter) => {
  const interactor = useInteractor();

  // view models, event handlers for the screen.
  return {};
};

export default usePresenter;
