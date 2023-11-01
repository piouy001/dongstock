import usePresenter from "./WorldStockScreen.presenter";
import useRouter from "./WorldStockScreen.router";

const WorldStockScreen = () => {
  const router = useRouter();
  const presenter = usePresenter(router);

  return (
    <>
      <div>WorldStockScreen</div>
    </>
  );
};

export default WorldStockScreen;
