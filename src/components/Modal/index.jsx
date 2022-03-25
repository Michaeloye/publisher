import React from "react";
import Backdrop from "../Backdrop";
import close from "../../assets/close.svg";

export default function Modal({ handleClose }) {
  return (
    <Backdrop>
      <div
        className="relative mx-auto h-96 w-96 flex bg-white items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={close}
          onClick={() => handleClose(false)}
          className="h-7 w-7 absolute cursor-pointer -top-8 right-0 md:-right-7"
        />
      </div>
    </Backdrop>
  );
}
