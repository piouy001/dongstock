import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {}

const DomesticScreen = ({}: Props): React.ReactNode => {
  const navigate = useNavigate();

  console.log(navigate);

  return (
    <div>
      <div>DomesticScreen</div>
    </div>
  );
};

export default DomesticScreen;
