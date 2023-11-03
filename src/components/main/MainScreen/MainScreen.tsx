import usePresenter from "./MainScreen.presenter";
import useRouter from "./MainScreen.router";

const MainScreen = () => {
  const router = useRouter();
  const presenter = usePresenter(router);

  return <div>MainScreen</div>;
};

export default MainScreen;
