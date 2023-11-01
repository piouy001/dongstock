import Layout from "components/layout/Layout";
import usePresenter from "./MainScreen.presenter";
import useRouter from "./MainScreen.router";

const MainScreen = () => {
  const router = useRouter();
  const presenter = usePresenter(router);

  return (
    <>
      <div>MainScreean</div>
    </>
  );
};

export default MainScreen;
