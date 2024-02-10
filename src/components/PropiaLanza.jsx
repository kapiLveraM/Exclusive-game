import React from "react";
import CommonButtonLiner from "./common/button/CommonButtonLiner";

const PropiaLanza = () => {
  return (
    <div id="Hogar" className="container max-w-[1152px] mx-auto px-3 mt-20 xl:mt-0 xl:pt-[150px]">
      <div className="bg-[url('/assets/images/background/FinalCta.png')] flex flex-col items-center justify-center rounded-2xl border-[0.5px] border-[#FFFFFF80] xl:py-[104px] md:py-20 py-10 !px-2">
        <p className=" text-white font-normal text-3xl font-Anton md:mb-10 mb-5 text-center">
          Lanza tu propia plataforma en sólo 2 semanas
        </p>
        <CommonButtonLiner content="Leer más" />
      </div>
    </div>
  );
};

export default PropiaLanza;
