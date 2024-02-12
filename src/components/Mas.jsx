import Image from "next/image";
import React from "react";
import { masCards } from "./common/Helper";

const Mas = () => {
  return (
    <div className=" relative">
      <div className="w-[484px] h-[484px] absolute bg-[linear-gradient(306.99deg,_#51C8EF_-13.72%,_#7AF57A_102.02%)] opacity-50 rounded-full blur-[200px] left-[-20px] top-[-50%]"></div>
      <div className="w-[484px] h-[484px] absolute bg-[linear-gradient(306.99deg,_#51C8EF_-13.72%,_#7AF57A_102.02%)] opacity-50 rounded-full blur-[200px] right-[-20%] bottom-[-40%]"></div>
      <div className="container max-w-[1140px] mx-auto px-3 pb-20 mt-36 lg:pb-0 relative z-20">
        <div className="flex flex-wrap items-center justify-center">
          <div className="xl:w-6/12 lg:w-7/12 sm:w-8/12 w-full lg:pe-5">
            <Image
              src="/assets/images/mas/seven.webp"
              width={558}
              height={439}
              className=" w-full "
              alt="seven"
            />
          </div>
          <div className="xl:w-6/12 lg:w-5/12 sm:w-10/12 w-full lg:ps-5 lg:mt-0 mt-8 flex flex-col lg:items-start items-center">
            <p className=" font-Anton font-normal lg:text-start text-center text-white xl:text-5xl text-3xl xl:mb-14 mb-10 leading-[97%]">
              Más razones para elegirnos
            </p>
            <div className=" flex flex-col gap-6">
              {masCards.map((value, index) => {
                return (
                  <div
                    className="bg-[#041C23] max-w-[374px] flex items-center md:ps-14 ps-3 pe-3 transition-all ease-in-out duration-150 hover:translate-y-[-8px] py-6 gap-[37px] rounded-2xl w-full border-[0.5px] border-[#367E6D]"
                    key={index}
                  >
                    {value.icon}
                    <div className=" flex flex-col">
                      <p className=" text-white font-normal text-3xl font-Anton">
                        {value.tittle}
                      </p>
                      <p className=" font-medium text-xs sm:text-sm text-white">
                        {value.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mas;
