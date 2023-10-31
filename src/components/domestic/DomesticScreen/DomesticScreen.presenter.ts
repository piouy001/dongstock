import useInteractor from "./DomesticScreen.interactor";
import { DomesticScreenRouter } from "./DomesticScreen.router";

const usePresenter = (router: DomesticScreenRouter) => {
  const interactor = useInteractor();

  // view models, event handlers for the screen.
  return {};
};

export default usePresenter;
