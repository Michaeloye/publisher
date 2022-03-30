import React from "react";
import { GrStatusGood } from "react-icons/gr";
import Backdrop from "../Backdrop";
import close from "../../assets/close.svg";

function AccountCreatedModal({ handleClose }) {
  return (
    <Backdrop>
      <div
        className="relative mx-auto h-96 w-96 md:w-1/3 bg-white flex flex-col items-center justify-center rounded-2xl gap-2 md:gap-3 py-7"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={close}
          onClick={() => handleClose(false)}
          className="h-7 w-7 absolute cursor-pointer -top-8 right-0 md:-right-7"
        />
        Account Created Successfully
        <GrStatusGood color="blue" />
      </div>
    </Backdrop>
  );
}

export default AccountCreatedModal;
