import React from "react";
import Image from "next/image";
import ButtonWhite from "../button/ButtonWhite";

const Cards = (props) => {
  const { image, titleText } = props;
  return (
    <div className="relative mx-3 my-3  rounded-lg transition-all ease-in-out duration-150 after:absolute after:w-1 after:hover:w-full after:hover:bg-black after:hover:h-full after:left-0 after:right-0 after:top-0 after:rounded-lg after:opacity-65 after:transition-all after:ease-in-out after:duration-200 hover:border-[1.5px] hover:border-CornflowerBlue">
      <div className="  opacity-0 hover:opacity-100 duration-300 w-full flex justify-center items-center absolute h-full z-50  rounded-lg">
        <ButtonWhite title={titleText} />
      </div>
      <Image loading="lazy" width={364} height={265} src={image} alt="slots card" />
    </div>
  );
};

export default Cards;
