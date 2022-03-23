import React from "react";
import NavElement from "../NavElement";

function SideNav() {
  return (
    <div className="md:w-[10%] lg:w-[32%] md:flex md:flex-col lg:items-start md:gap-7 lg:gap-5 md:items-center md:mt-10 border-r-2">
      <NavElement iconNumber={1} text="Home" active={true} />
      <NavElement iconNumber={2} text="Explore" />
      <NavElement iconNumber={3} text="Topics" />
      <NavElement iconNumber={4} text="My comments" />
    </div>
  );
}

export default SideNav;
