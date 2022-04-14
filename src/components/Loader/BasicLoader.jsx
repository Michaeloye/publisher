import React from "react";
import { Oval } from "react-loader-spinner";

function BasicLoader() {
  return (
    <Oval
      ariaLabel="loading-indicator"
      height={50}
      width={50}
      strokeWidth={3}
      color="#1a62dc"
      secondaryColor="#eeeeee"
    />
  );
}

export default BasicLoader;
