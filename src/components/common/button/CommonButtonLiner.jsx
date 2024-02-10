import React from "react";
import { ButtonGreen } from "../icons/common";

const CommonButtonLiner = (props) => {
  const { content } = props;
  return (
    <div className=" relative group">
      <button
        className={`font-inter font-bold text-sm bg-[linear-gradient(306.99deg,_#51c8ef_-13.72%,_#7af57a_102.02%)] text-black  rounded-[41px] p-[13px_46px] relative z-10 `}
      >
        {content}
      </button>
      <span className="absolute start-[-7px] bottom-[-7px] group-hover:start-0 group-hover:bottom-0 transition-all ease-in-out duration-200 group-hover:opacity-0">
       <ButtonGreen/>
      </span>
    </div>
  );
};

export default CommonButtonLiner;
