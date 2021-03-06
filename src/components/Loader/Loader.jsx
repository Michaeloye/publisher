import React from "react";
import Backdrop from "../Backdrop";
import { Oval } from "react-loader-spinner";

function Loader() {
  return (
    <Backdrop>
      <Oval
        ariaLabel="loading-indicator"
        height={50}
        width={50}
        strokeWidth={3}
        color="#1a62dc"
        secondaryColor="#eeeeee"
      />
    </Backdrop>
  );
}

export default Loader;
