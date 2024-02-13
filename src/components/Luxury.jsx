import React from "react";
import Image from "next/image";
import CommonButtonLiner from "./common/button/CommonButtonLiner";

// Component definition
const Luxury = () => {
  return (
    <div className="container max-w-[1140px] mx-auto px-3 relative z-50">
      {/* Background container */}
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="bg-[url('/assets/images/background/Luxury.png')] py-[46px] bg-cover border-[0.5px] border-[#FFFFFF80] sm:border-none rounded-2xl sm:bg-[100%_100%] bg-no-repeat text-center flex justify-center flex-col items-center px-3 relative"
      >
        {/* Images */}
        <Image
          loading="lazy"
          width={78}
          height={79}
          src="/assets/images/luxury/coin.png"
          alt="coin"
          className="w-auto h-auto absolute left-52 top-[102px] hidden lg:block"
        />
        {/* More images */}
        {/* ... */}
        {/* Title */}
        <h3 className="font-Anton font-normal lg:text-start text-center text-white text-lg leading-[97%]">
          Luxury{" "}
        </h3>
        {/* Description */}
        <p className="font-Inter font-medium text-xs sm:text-sm mt-3 sm:mt-4 mb-5 sm:mb-6 text-white opacity-80 max-w-[391px] sm:leading-7">
          lleva tu experiencia de juego al siguiente nivel. Con todas las
          características de la versión Silver y la potencia adicional de la
          tecnología React .
        </p>
        {/* Price */}
        <h2 className="font-Anton text-3xl md:text-5xl text-white mt-8">
          $9000
        </h2>
        {/* Features */}
        <div className="flex flex-col justify-between">
          {/* Feature */}
          <div className="flex items-start gap-2 mt-4 ">
            <Image
              loading="lazy"
              width={24}
              height={24}
              src="/assets/icons/nuestrasOfertas/biCheckAll.svg"
              alt="bi_check"
            />
            <p className="font-medium text-xs sm:text-sm sm:leading-6 font-Inter text-white opacity-80 max-w-[387px]">
              Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas
              manuales
            </p>
          </div>
          {/* More features */}
          {/* ... */}
        </div>
        {/* Buy button */}
        <div className="mt-9">
          <CommonButtonLiner type="submit" content="Comprar ahora" />
        </div>
      </div>
    </div>
  );
};

export default Luxury;
