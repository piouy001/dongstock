import React from "react";

import usePresenter from "./MainScreen.presenter";
import useRouter from "./MainScreen.router";

const MainScreen = () => {
  const router = useRouter();
  const presenter = usePresenter(router);

  return (
    <>
      <div>
        <div>MainScreen</div>
      </div>
    </>
  );
};

export default MainScreen;
