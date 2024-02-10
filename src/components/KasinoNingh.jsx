import Image from "next/image";
import React from "react";
import CommonButtonLiner from "./common/button/CommonButtonLiner";

const KasinoNingh = () => {
  return (
    <div id="Porqué" className="bg-white md:bg-transparent bg-[url('/assets/images/background/slots.png')] bg-no-repeat bg-size-full my-20 py-16  md:my-0 md:py-32">
    <div className="container max-w-[1152px] mx-auto px-3 lg:py-24">
      <div className="flex flex-wrap lg:flex-row flex-col-reverse items-center justify-center">
        <div className="lg:w-6/12 md:w-7/12 sm:w-10/12 w-full lg:pe-5 lg:mt-0 mt-8">
          <div>
            <p className=" font-Anton font-normal text-black xl:text-5xl text-3xl mb-4 leading-[97%]">
              Por qué elegirnos
            </p>
            <p className=" font-Inter font-medium md:text-sm text-xs text-darkBlue opacity-70 max-w-[515px]">
              Con Exclusive Games tenés Exclusivos beneficios. Te reintegramos
              todo lo invertido en fichas en la moneda que elijas. En Exclusive
              Games siempre sumamos nuevos juegos. Juegos crash, los juegos
              interactivos que más pide la gente. Con Exclusive Games empezás a
              ganar ya! Creamos tu plataforma en solo 2 semanas.
            </p>
            <div className="mt-6">
              <CommonButtonLiner content="Aprende más" />
            </div>
          </div>
        </div>
        <div className="lg:w-6/12 md:w-7/12 sm:w-10/12 w-full lg:ps-5">
          <Image
            loading="lazy"
            src="/assets/images/PorQue/casinoNight.webp"
            width={558}
            height={439}
              className="w-full"
              alt="casinoNight"
          />
        </div>
      </div>
      </div>
      </div>
  );
};

export default KasinoNingh;
