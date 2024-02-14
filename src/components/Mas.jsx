import Image from "next/image";
import React from "react";
import { MasCards } from "./common/Helper";

// Component definition
const Mas = () => {
  return (
    <div className="relative">
      {/* Background circles */}
      <div className="w-[484px] h-[484px] absolute bg-gradient-to-bl from-lightSky to-lightGreen opacity-50 rounded-full blur-[200px] left-[-20px] top-[-50%] hidden xl:block "></div>
      <div className="w-[484px] h-[484px] absolute bg-gradient-to-bl from-lightSky to-lightGreen opacity-50 rounded-full blur-[200px] right-[-20%] bottom-[-40%] hidden xl:block"></div>
      {/* Content container */}
      <div className="container max-w-[1140px] mx-auto px-3 mt-36 lg:pb-0 relative z-50">
        <div className="flex flex-wrap items-center justify-center">
          {/* Left side with image */}
          <div
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="800"
            className="xl:w-6/12 lg:w-7/12 sm:w-8/12 w-full lg:pe-5"
          >
            <Image
              src="/assets/images/mas/Seven.webp"
              width={558}
              height={439}
              className="w-full"
              alt="seven"
            />
          </div>
          {/* Right side with cards */}
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-easing="linear"
            className="xl:w-6/12 lg:w-5/12 sm:w-10/12 w-full lg:ps-5 lg:mt-0 mt-8 flex flex-col lg:items-start items-center"
          >
            {/* Title */}
            <p className="font-Anton font-normal lg:text-start text-center text-white xl:text-5xl text-3xl xl:mb-14 mb-10 leading-[97%]">
              Más razones para elegirnos
            </p>
            {/* Cards */}
            <div className="flex flex-col gap-6">
              {MasCards.map((value, index) => {
                return (
                  <div
                    className=" bg-darkBlack max-w-[374px] flex items-center md:ps-14 ps-3 pe-3 transition-all ease-in-out duration-300 hover:shadow-white shadow py-6 gap-[37px] rounded-2xl w-full border-[0.5px] border-Himalaya "
                    key={index}
                  >
                    {/* Icon */}
                    {value.icon}
                    {/* Content */}
                    <div className="flex flex-col">
                      <p className="text-white font-normal text-3xl font-Anton">
                        {value.title}
                      </p>
                      <p className="font-medium text-sm sm:text-base text-white">
                        {value.description}
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
