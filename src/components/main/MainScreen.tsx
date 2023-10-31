import React from "react";
import { useNavigate } from "react-router-dom";
import { DOMESTIC_URL } from "./../../constants/URLConstant";

interface Props {}

const MainScreen = ({}: Props): React.ReactNode => {
  const navigate = useNavigate();

  return (
    <div>
      <div>MainScreen</div>
      <button
        onClick={() => {
          navigate(DOMESTIC_URL);
        }}
      >
        click
      </button>
    </div>
  );
};

export default MainScreen;
