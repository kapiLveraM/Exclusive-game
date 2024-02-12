import React from "react";
import Image from "next/image";
import CommonButton from "../button/CommonButton";

const CommonCradContent = (props) => {
  const { image, buttonContent } = props;
  return (
    <div className="relative mx-3 my-3  rounded-lg transition-all ease-in-out duration-150 after:absolute after:w-1 after:hover:w-full after:hover:bg-black after:hover:h-full after:left-0 after:right-0 after:top-0 after:rounded-lg after:opacity-65 after:transition-all after:ease-in-out after:duration-200">
      <div className="rounded-lg  opacity-0 hover:opacity-100 duration-300 w-full flex justify-center items-center absolute h-full z-50 hover:border-[1.5px] hover:border-[radial-gradient(48.51%_51.68%_at_50.39%_55.02%,_#B8B8B8_0%,_#BCBCBC_23%,_#C9C9C9_47%,_#DEDEDE_72%,_#FCFCFC_98%,_#FFFFFF_100%)]">
        <CommonButton content={buttonContent} />
      </div>
      <Image loading="lazy" width={364} height={265} src={image} alt="slots card" />
    </div>
  );
};

export default CommonCradContent;
