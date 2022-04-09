import React from "react";
import Backdrop from "../Backdrop";
import close from "../../assets/close.svg";

function ErrorOccuredModal({ handleClose }) {
  return (
    <Backdrop>
      <div
        className="relative mx-auto h-80   md:h-96 w-11/12 md:w-1/3 bg-white flex flex-col items-center justify-center rounded-2xl gap-2 md:gap-3 py-7"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={close}
          onClick={() => handleClose(false)}
          className="h-7 w-7 absolute cursor-pointer -top-8 right-0 md:-right-7"
        />
        <p className="text-xl font-semibold text-[#1a1a1a]">
          We're Sorry an error occured.
        </p>
        <span className="text-lg text-gray-700 mt-3">Try again later</span>
      </div>
    </Backdrop>
  );
}

export default ErrorOccuredModal;
