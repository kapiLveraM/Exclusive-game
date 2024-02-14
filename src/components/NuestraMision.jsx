import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GreenArrow } from "./common/Icons";

// Define NuestraMision component
const NuestraMision = () => {
  return (
    <div id="Misión" className="sm:pt-20 sm:pb-24 relative">
      {/* Gradient overlays */}
      <div className="w-[484px] h-[484px] absolute bg-gradient-to-bl from-lightSky to-lightGreen opacity-50 rounded-full blur-[200px] left-[-20px] top-16"></div>
      <div className="w-[484px] h-[484px] absolute bg-gradient-to-bl from-lightSky to-lightGreen opacity-50 rounded-full blur-[200px] right-[-22%] bottom-[-38%] hidden lg:block"></div>
      
      {/* Container */}
      <div className="container xl:max-w-[1140px] mx-auto px-3">
        {/* Content */}
        <div className="flex justify-center flex-wrap relative z-10">
          {/* Left section */}
          <div className="w-full sm:w-10/12 md:w-6/12 sm:px-3 lg:ps-3 lg:pr-8">
            {/* Image */}
            <Image
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-easing="linear"
              data-aos-duration="800"
              loading="lazy"
              height={538}
              width={536}
              src="/assets/images/nuestraMision/poker.webp"
              alt="poker"
              className="w-full sm:max-w-[500px] md:w-full"
            />
            {/* Text */}
            <div
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="800"
              className="mt-7 md:mt-[60px]"
            >
              <h2 className="font-Anton text-3xl md:text-5xl text-white">
                Nuestra Visión
              </h2>
              <p className="font-Inter font-medium text-sm sm:text-base mt-3 sm:mt-4 mb-5 sm:mb-6 text-white !opacity-80 max-w-[444px] leading-7">
                Nuestra visión es ser líderes indiscutibles en la industria de
                los juegos de azar y llevar nuestra pasión por el
                entretenimiento más allá de las fronteras. Imagina un mundo
                donde la emoción y la diversión no tengan límites, y ese es el
                mundo que queremos crear contigo.
              </p>
              <Link
                href="#"
                className="font-Inter font-bold text-green text-base flex items-center group"
              >
                Aprende más
                <span className="ms-2 group-hover:ms-4 transition-all ease-in-out duration-150">
                  <GreenArrow />
                </span>
              </Link>
            </div>
          </div>
          
          {/* Decorative circle */}
          <div className="top-[45%] left-[35%] w-[234px] h-[234px] absolute bg-gradient-to-bl from-lightSky to-lightGreen opacity-50 rounded-full blur-[90px] z-[-1]"></div>

          {/* Right section */}
          <div className="w-full sm:w-10/12 md:w-6/12 mt-9 md:mt-0 sm:px-3 lg:ps-8 lg:pr-3 flex flex-col-reverse md:block">
            {/* Text */}
            <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="800" className="mt-7 md:mt-0">
              <h2 className="font-Anton text-white text-3xl md:text-5xl">
                Nuestra Misión
              </h2>
              <p className="font-Inter font-medium text-sm sm:text-base mt-3 sm:mt-4 mb-4 sm:mb-6 text-white !opacity-80 max-w-[444px] leading-7">
                Nuestra misión es simple pero poderosa: proporcionarte la más
                amplia gama de soluciones de entretenimiento de alta calidad y
                rentabilidad. Estamos comprometidos a elevar tus expectativas y
                brindarte experiencias inigualables.
              </p>
              <Link
                href="#"
                className="font-Inter font-bold text-green text-base flex items-center group"
              >
                Aprende más
                <span className="ms-2 group-hover:ms-4 transition-all ease-in-out duration-150">
                  <GreenArrow />
                </span>
              </Link>
            </div>
            {/* Image */}
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-easing="linear"
              data-aos-duration="800"
              className="mt-7 md:mt-[60px]"
            >
              <Image
                sizes="100vw"
                loading="lazy"
                height={58}
                width={536}
                src="/assets/images/nuestraMision/aviator.webp"
                alt="poker"
                className="w-full sm:max-w-[500px] md:w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export NuestraMision component
export default NuestraMision;
