import React from "react";

import usePresenter from "./DomesticScreen.presenter";
import useRouter from "./DomesticScreen.router";

const DomesticScreen = () => {
  const router = useRouter();
  const presenter = usePresenter(router);

  return (
    <>
      <div>
        <div>DomesticScreen</div>
      </div>
    </>
  );
};

export default DomesticScreen;
