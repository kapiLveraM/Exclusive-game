import React from "react";
import Image from "next/image";
import ButtonWhite from "./common/button/ButtonWhite";

// Component definition
const Platinum = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="800"
      className="container xl:max-w-[1140px] px-3 mx-auto mt-20 relative"
    >
      {/* Background circles */}
      <div className="w-[484px] h-[484px] absolute  bg-gradient-to-bl from-lightSky to-lightGreen opacity-50 rounded-full blur-[200px] left-[-20%] top-[-30%] z-0 hidden lg:block"></div>
      <div className="w-[484px] h-[484px] absolute bg-gradient-to-bl from-lightSky to-lightGreen opacity-50 rounded-full blur-[200px] right-[-55%] top-[70%] z-0 hidden lg:block"></div>

      {/* Content box */}
      <div className="border border-[rgba(255,_255,_255,_0.5)] Nuestras-ofertas-box rounded-2xl px-5 py-11 lg:py-[79px] lg:px-12 relative z-40">
        <div className="flex flex-wrap flex-col-reverse lg:flex-row lg:items-center justify-between">
          {/* Left side with text */}
          <div className="lg:w-6/12 xl:w-5/12">
            {/* Title */}
            <h3 className="font-Anton text-lg text-white">Platinum</h3>
            {/* Description */}
            <p className="mt-4 font-medium sm:text-xs text-sm font-Inter opacity-80 text-white max-w-[364px]">
              Diseño totalmente personalizado. Contáctanos para un presupuesto.
            </p>
            {/* Price */}
            <h2 className="font-Anton text-3xl md:text-5xl text-white mt-8">
              Consultar precio
            </h2>
            {/* Features */}
            <div className="flex items-start gap-2 mt-4">
              <Image
                loading="lazy"
                width={24}
                height={24}
                src="/assets/icons/nuestrasOfertas/biCheckAll.svg"
                alt="bi_check"
              />
              <p className="font-medium text-xs sm:text-sm leading-6 font-Inter text-white opacity-80 max-w-[387px]">
                Personalizable
              </p>
            </div>
            {/* Buy button */}
            <div className="mt-10">
              <ButtonWhite type="submit" title="Comprar ahora" />
            </div>
          </div>
          {/* Right side with image */}
          <div className="lg:w-6/12 xl:w-7/12 sm:px-3 flex justify-center lg:justify-end">
            <div className="Nuestras-ofertas-img relative">
              {/* Background circle */}
              <div className="w-36 h-36 absolute bg-gradient-to-bl from-lightSky to-lightGreen  rounded-full blur-[70px] right-[17%] top-[5%] hidden lg:block"></div>
              {/* Image */}
              <Image
                width={602}
                height={419}
                loading="lazy"
                src="/assets/images/platinum/Platinum.webp"
                alt="Nuestras-ofertas"
                className="sm:max-w-[500px] lg:max-w-[602px] w-100 relative z-10 mt-5 lg:mt-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platinum;
