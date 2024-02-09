import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GreenArrow } from "./common/icons/common";

const NuestraMision = () => {
  return (
    <div className="sm:pt-20 sm:pb-24 relative ">
      <div className=" w-[484px] h-[484px] absolute bg-[linear-gradient(306.99deg,_#51C8EF_-13.72%,_#7AF57A_102.02%)] opacity-50 rounded-full blur-[200px] left-[-20px] top-16"></div>
      <div className=" w-[484px] h-[484px] absolute bg-[linear-gradient(306.99deg,_#51C8EF_-13.72%,_#7AF57A_102.02%)] opacity-50 rounded-full blur-[200px] right-[-22%] bottom-[-28%] hidden lg:block"></div>
      <div className="container xl:max-w-[1140px] mx-auto px-3">
        <div className=" flex flex-wrap relative z-10">
          <div className=" md:w-6/12 sm:px-3 lg:ps-3 lg:pr-8">
            <Image
              loading="lazy"
              height={538}
              width={536}
              src="/assets/images/nuestraMision/poker.webp"
              alt="poker"
              className=" w-full"
            />
            <div className=" mt-7 md:mt-[60px]">
              <h2 className=" font-Anton text-3xl md:text-5xl text-white">
                Nuestra Visión
              </h2>
              <p className=" font-Inter font-medium text-xs sm:text-sm mt-3 sm:mt-4 mb-5 sm:mb-6 text-white opacity-80 max-w-[444px] leading-7">
                Nuestra visión es ser líderes indiscutibles en la industria de
                los juegos de azar y llevar nuestra pasión por el
                entretenimiento más allá de las fronteras. Imagina un mundo
                donde la emoción y la diversión no tengan límites, y ese es el
                mundo que queremos crear contigo.
              </p>
              <Link
                href="#"
                className=" font-Inter font-bold text-green text-sm flex items-center group"
              >
                Aprende más{" "}
                <span className=" ms-2 group-hover:ms-4 transition-all ease-in-out duration-150">
                  <GreenArrow />{" "}
                </span>{" "}
              </Link>
            </div>
          </div>
          <div className=" top-[45%] left-[35%] w-[234px] h-[234px] absolute bg-[linear-gradient(306.99deg,_#51C8EF_-13.72%,_#7AF57A_102.02%)] opacity-50 rounded-full blur-[90px] z-[-1]"></div>

          <div className=" md:w-6/12 mt-9 md:mt-0 sm:px-3 lg:ps-8 lg:pr-3 flex flex-col-reverse md:block">
            <div className="mt-7 md:mt-0">
              <h2 className=" font-Anton  text-white text-3xl md:text-5xl">
                Nuestra Misión
              </h2>
              <p className=" font-Inter font-medium text-xs sm:text-sm mt-3 sm:mt-4 mb-4 sm:mb-6 text-white opacity-80 max-w-[444px] leading-7">
                Nuestra misión es simple pero poderosa: proporcionarte la más
                amplia gama de soluciones de entretenimiento de alta calidad y
                rentabilidad. Estamos comprometidos a elevar tus expectativas y
                brindarte experiencias inigualables.
              </p>
              <Link
                href="#"
                className=" font-Inter font-bold text-green text-sm flex items-center group"
              >
                Aprende más{" "}
                <span className=" ms-2 group-hover:ms-4 transition-all ease-in-out duration-150">
                  <GreenArrow />{" "}
                </span>{" "}
              </Link>
            </div>
            <div className="mt-7 md:mt-[60px]">
              <Image
                sizes="100vw"
                loading="lazy"
                height={538}
                width={536}
                src="/assets/images/nuestraMision/aviator.webp"
                alt="poker"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuestraMision;
