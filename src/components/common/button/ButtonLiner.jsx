import React from "react";
import { ButtonGreen } from "../icons/common";

const ButtonLiner = (props) => {
  const {title} = props;
  return (
    <div className=" relative group">
      <button
        className={`font-inter font-bold text-sm bg-gradient-to-bl from-lightSky to-lightGreen text-darkBlack  rounded-[41px] p-[13px_46px] relative z-10 `}
      >
        {title}
      </button>
      <span className="absolute start-[-7px] bottom-[-7px] group-hover:start-0 group-hover:bottom-0 transition-all ease-in-out duration-200 group-hover:opacity-0">
       <ButtonGreen/>
      </span>
    </div>
  );
};

export default ButtonLiner;
