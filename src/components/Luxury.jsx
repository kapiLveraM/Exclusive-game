import React from "react";
import Image from "next/image";
import GreenButton from "./common/button/GreenButton";

const Luxury = () => {
  return (
    <div className="container xl:max-w-[1140px] mx-auto px-3 relative z-50 ">
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="800"
        className="bg-lanza py-[46px] bg-cover border-[0.5px] border-MagentaYellow sm:border-none rounded-2xl sm:bg-[100%_100%] bg-no-repeat text-center flex justify-center flex-col items-center px-3 relative"
      >
        <Image
          loading="lazy"
          width={78}
          height={79}
          src="/assets/images/luxury/Coin.png"
          alt="coin"
          className=" w-auto h-auto absolute left-52 top-[102px] hidden lg:block"
        />
        <Image
          loading="lazy"
          width={149}
          height={150}
          src="/assets/images/luxury/PlayingCardDarkRed.png"
          alt="coin"
          className=" absolute right-32 top-[102px] hidden lg:block Card_flip"
        />
        <Image
          loading="lazy"
          width={176}
          height={186}
          src="/assets/images/luxury/PlayingCardRed.png"
          alt="coin"
          className=" absolute left-32 bottom-24 hidden lg:block Card_flip"
        />
        <Image
          loading="lazy"
          width={66}
          height={69}
          src="/assets/images/luxury/Dei.png"
          alt="coin"
          className=" absolute right-52 bottom-32 hidden lg:block"
        />
        <h3 className=" font-Anton font-normal lg:text-start text-center text-white text-lg  leading-[97%]">
          Luxury
        </h3>
        <p className=" font-Inter font-medium text-sm sm:text-base mt-3 sm:mt-4 mb-5 sm:mb-6 text-white !opacity-80 max-w-[391px] sm:leading-7">
          lleva tu experiencia de juego al siguiente nivel. Con todas las
          características de la versión Silver y la potencia adicional de la
          tecnología React .
        </p>
        <h2 className=" font-Anton text-3xl md:text-5xl text-white mt-8">
          $9000
        </h2>
        <div className=" flex flex-col justify-between">
          <div className="flex items-start gap-2 mt-4 ">
            <Image
              loading="lazy"
              width={24}
              height={24}
              src="/assets/images/nuestrasOfertas/BiCheckAll.svg"
              alt="bi_check"
            />
            <p className="font-medium text-sm sm:text-base sm:leading-6 font-Inter text-white !opacity-80 max-w-[387px]">
              Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas
              manuales
            </p>
          </div>
          <div className="flex items-start gap-2 mt-4 justify-between">
            <Image
              loading="lazy"
              width={24}
              height={24}
              src="/assets/images/nuestrasOfertas/BiCheckAll.svg"
              alt="bi_check"
            />
            <p className="font-medium text-sm sm:text-base sm:leading-6 font-Inter text-white !opacity-80 max-w-[387px]">
              Control de RTP (controlás qué porcentaje pagar)
            </p>
          </div>
          <div className="flex items-start gap-2 mt-4 ">
            <Image
              loading="lazy"
              width={24}
              height={24}
              src="/assets/images/nuestrasOfertas/BiCheckAll.svg"
              alt="bi_check"
            />
            <p className="font-medium text-sm sm:text-base sm:leading-6 font-Inter text-white !opacity-80 max-w-[387px]">
              Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales
              Regalo
            </p>
          </div>
          <div className="flex items-start gap-2 mt-4 justify-between mr-4">
            <Image
              loading="lazy"
              width={24}
              height={24}
              src="/assets/images/nuestrasOfertas/BiCheckAll.svg"
              alt="bi_check"
            />
            <p className="font-medium text-sm sm:text-base sm:leading-6 font-Inter text-white !opacity-80 max-w-[387px]">
              Aplicación para Android y Windows de regalo.
            </p>
          </div>
          <div className="flex items-start gap-2 mt-4 justify-between mr-14 ms:mr-16">
            <Image
              loading="lazy"
              width={24}
              height={24}
              src="/assets/images/nuestrasOfertas/BiCheckAll.svg"
              alt="bi_check"
            />
            <p className="font-medium text-sm sm:text-base sm:leading-6 font-Inter text-white !opacity-80 max-w-[387px]">
              Tiempo de creación 2 a 3 semanas
            </p>
          </div>
        </div>
        <div className=" mt-9">
          <GreenButton type="subimt" title="Comprar ahora" />
        </div>
      </div>
    </div>
  );
};

export default Luxury;
