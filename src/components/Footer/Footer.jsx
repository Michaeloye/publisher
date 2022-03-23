import React from "react";

function Footer() {
  return (
    <div className="bg-white md:w-11/12 lg:w-3/4 rounded-2xl py-5 shadow-lg flex md:gap-3 lg:gap-7 justify-center text-gray-400 text-left md:text-xs lg:text-sm">
      <div>
        <p>Help</p>
        <p className="mt-2">FAQs</p>
        <p className="mt-2">About Us</p>
        <p className="mt-2">Copyright</p>
      </div>
      <div>
        <p>Developers</p>
        <p className="mt-2">Terms</p>
        <p className="mt-2">Privacy Policy</p>
      </div>
    </div>
  );
}

export default Footer;
