import React from 'react';
import Backdrop from '../Backdrop';
import close from '../../assets/svgs/close.svg';

export default function Modal({ handleClose, image }) {
  return (
    <Backdrop>
      <div
        className="relative mx-auto h-full w-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={close}
          onClick={() => handleClose(false)}
          className="h-7 w-7 absolute cursor-pointer"
          style={{ top: '5%', right: '10%' }}
        />
        <img src={image} alt="image-of-product" className="w-auto" style={{ maxHeight: '90vh' }} />
      </div>
    </Backdrop>
  );
}
