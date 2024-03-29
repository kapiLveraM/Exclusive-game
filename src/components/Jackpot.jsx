import Image from "next/image";
import React from "react";
import { JackpotServices } from "./common/Helper";
import Lanza from "./Lanza";
import juegosen from "./juegosen";
import { GreenArrowJackpot } from "./common/Icons";

// Define Jackpot component
const Jackpot = () => {
  return (
    <div id="Tragamonedas" className=" bg-jackpot bg-no-repeat bg-[100%_100%] md:mb-24 relative">
      {/* Gradient background circles */}
      <div className="w-[484px] h-[484px] absolute bg-gradient-to-bl from-lightSky to-lightGreen opacity-50 rounded-full blur-[200px] left-[-20px] top-[-25%] hidden lg:block"></div>
      <div className="w-[484px] h-[484px] absolute bg-gradient-to-bl from-lightSky to-lightGreen opacity-50 rounded-full blur-[200px] right-[-20%] bottom-0"></div>
      {/* Container */}
      <div className="container max-w-[1140px] mx-auto px-3 xl:pb-[150px] pb-20 relative z-40 lg:mt-24">
        {/* Content */}
        <div className="flex flex-wrap items-center justify-center">
          {/* Image */}
          <div className="lg:w-6/12 md:w-7/12 sm:w-10/12 w-full lg:pe-5">
            <Image
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-easing="linear"
              data-aos-duration="800"
              loading="lazy"
              src="/assets/images/jackpot/Jackpot.webp"
              width={558}
              height={439}
              className="w-full"
              alt="jackpot"
            />
          </div>
          {/* Text content */}
          <div className="lg:w-6/12 md:w-7/12 sm:w-10/12 w-full lg:ps-5 lg:mt-0 mt-8">
            <div data-aos="fade-left" data-aos-delay="100" data-aos-easing="linear" data-aos-duration="800">
              <p className="font-Anton font-normal text-white xl:text-[47px] text-3xl mb-4 leading-[97%]">
                Potenciando sus elecciones
              </p>
              <p className="font-inter font-medium md:text-base text-sm text-white opacity-70 mb-6">
                Con Exclusive Game lo mejor está de tu lado.
              </p>
              {/* Services */}
              <div className="flex flex-col gap-3 mb-6">
                {JackpotServices.map((title, index) => {
                  return (
                    <div className="flex items-center" key={index}>
                      <GreenArrowJackpot />
                      <p className="ms-2 font-Inter font-medium md:text-base text-sm text-white opacity-70 max-w-[415px]">
                        {title}
                      </p>
                    </div>
                  );
                })}
              </div>
              <p className="font-Inter font-medium md:text-base text-sm text-white opacity-70">
                Te reintegramos todo lo invertido en fichas en la moneda que elijas.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Additional components */}
      <Lanza />
      <juegosen />
    </div>
  );
};

// Export Jackpot component
export default Jackpot;
