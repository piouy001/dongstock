import useInteractor from "./WorldStockScreen.interactor";
import { WorldStockScreenRouter } from "./WorldStockScreen.router";

const usePresenter = (router: WorldStockScreenRouter) => {
  const interactor = useInteractor();

  // view models, event handlers for the screen.
  return {};
};

export default usePresenter;
