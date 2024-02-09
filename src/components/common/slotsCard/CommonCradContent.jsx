import React from "react";
import Image from "next/image";
import CommonButton from "../button/CommonButton";

const CommonCradContent = (props) => {
  const { image, buttonContent } = props;
  return (
    <div className="relative border hover:border-lightGreen rounded-lg transition-all ease-in-out duration-150">
      <div className="bg-black rounded-lg opacity-0 hover:opacity-60 duration-300 w-full flex justify-center items-center absolute h-full">
        <CommonButton content={buttonContent} />
      </div>
      <Image loading="lazy" width={364} height={265} src={image} alt="slots card" />
    </div>
  );
};

export default CommonCradContent;
