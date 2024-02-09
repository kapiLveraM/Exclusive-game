"use client";
import React from "react";
import { ButtonLine } from "../icons/common";
const CommonButton = (props) => {
  const { content, bgColor } = props;
  return (
    <div className=" relative group">
      <button
        className={`font-inter font-bold text-base bg-transparent text-white border-white border  rounded-[41px] p-[13px_46px] relative z-10 `}
      >
        {content}
      </button>
      <span className="absolute start-[-7px] bottom-[-7px] group-hover:start-0 group-hover:bottom-0 transition-all ease-in-out duration-200 group-hover:opacity-0">
       <ButtonLine/>
      </span>
    </div>
  );
};
export default CommonButton;