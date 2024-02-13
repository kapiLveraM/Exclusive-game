import Image from "next/image";
import React from "react";
import { Slot } from "./common/Helper";
import ButtonLiner from "./common/button/ButtonLiner";
import Cards from "./common/allCards/Cards";

// Define NuestrosAtributos component
const NuestrosAtributos = () => {
  return (
    <div className="bg-white md:bg-transparent bg-luxury bg-no-repeat bg-size-full my-20 py-16 md:my-0 md:py-32 relative z-30">
      {/* Container */}
      <div className="container xl:max-w-[1140px] px-3 mx-auto md:pt-28 md:pb-36">
        {/* Title */}
        <h2 className="font-Anton text-3xl md:text-5xl text-darkBlack text-center lg:mt-8">
          Nuestros Atributos de Marca
        </h2>
        {/* Attributes section */}
        <div className="flex flex-wrap justify-center md:justify-between mt-8 md:mt-[60px] relative">
          {/* Attribute 1 */}
          <div className="w-full md:w-2/6 lg:w-1/4 sm:px-3">
            <div className="relative lg:max-w-[263px] text-center flex flex-col justify-center items-center">
              {/* Image */}
              <Image
                loading="lazy"
                height={273}
                width={42}
                className="absolute w-72 left-[80%] top-0 hidden lg:block"
                src="/assets/icons/nuestrosAtributos/NuestrosArrow.svg"
                alt="poker"
              />
              <Image
                loading="lazy"
                height={100}
                width={100}
                className="w-auto h-auto"
                src="/assets/icons/nuestrosAtributos/Inteligencia.svg"
                alt="poker"
              />
              {/* Title */}
              <h3
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="800"
                data-aos-delay="200"
                className="font-Anton text-md text-darkBlack mt-4"
              >
                Inteligencia
              </h3>
              {/* Description */}
              <p
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="800"
                data-aos-delay="400"
                className="font-medium text-sm sm:text-base font-Inter text-darkBlack opacity-80 max-w-[263px]"
              >
                Comprendemos a la perfección los gustos de las personas y el
                mundo del gaming.
              </p>
            </div>
          </div>
          {/* Attribute 2 */}
          <div className="w-full md:w-2/6 lg:w-1/4 sm:px-3 my-10 md:my-0">
            <div className="relative lg:max-w-[263px] text-center flex flex-col justify-center items-center">
              {/* Image */}
              <Image
                loading="lazy"
                height={273}
                width={42}
                className="absolute w-72 left-[80%] bottom-[120px] hidden lg:block"
                src="/assets/icons/nuestrosAtributos/NuestrosAtributosTwo.svg"
                alt="poker"
              />
              <Image
                loading="lazy"
                height={100}
                width={100}
                src="/assets/icons/nuestrosAtributos/Proactividad.svg"
                alt="poker"
              />
              {/* Title */}
              <h3
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="800"
                data-aos-delay="200"
                className="font-Anton text-md text-darkBlack mt-4"
              >
                Proactividad
              </h3>
              {/* Description */}
              <p
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="800"
                data-aos-delay="400"
                className="font-medium text-sm sm:text-base font-Inter text-darkBlack opacity-80 max-w-[235px]"
              >
                Somos creadores de cambios que exploran nuevas formas de
                entretenimiento.
              </p>
            </div>
          </div>
          {/* Attribute 3 */}
          <div className="w-full md:w-2/6 lg:w-1/4 sm:px-3">
            <div className="lg:max-w-[263px] text-center flex flex-col justify-center items-center">
              {/* Image */}
              <Image
                loading="lazy"
                height={100}
                width={100}
                src="/assets/icons/nuestrosAtributos/Innovación.svg"
                alt="poker"
              />
              {/* Title */}
              <h3
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="800"
                data-aos-delay="200"
                className="font-Anton text-md text-darkBlack mt-4"
              >
                Innovación
              </h3>
              {/* Description */}
              <p
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="800"
                data-aos-delay="400"
                className="font-medium text-sm sm:text-base font-Inter text-darkBlack opacity-80 max-w-[245px]"
              >
                Pensamos fuera de la caja para estar siempre un paso adelante.
              </p>
            </div>
          </div>
        </div>
        {/* Slots section */}
        <div className="mt-16 md:mt-16 lg:mt-[150px]">
          {/* Title */}
          <h2 className="font-Anton text-3xl md:text-5xl text-darkBlack text-center">
            Slots
          </h2>
          {/* Description */}
          <p className="text-center font-medium text-sm sm:text-base font-Inter text-darkBlack max-w-[904px] mx-auto opacity-80 mt-4">
            En Exclusive Games, ofrecemos una selección de más de 600 juegos de
            los principales desarrolladores, como Aristocrat, Amatic, EGT,
            Novomatic, IGT, Playtech, Igrosoft y Tom Horn. Nuestro equipo
            trabaja incansablemente para innovar y ampliar nuestra oferta de
            experiencias, garantizando la máxima seguridad con operaciones
            protegidas por cifrado SSL de 256 bits.
          </p>
          {/* Slots cards */}
          <div data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="800"
                data-aos-delay="400" className="flex flex-wrap justify-center mt-5 sm:mt-8 md:mt-14 pt-1">
            {Slot.map((value, index) => (
              <div
                key={index}
                className="md:w-4/12 sm:w-6/12 duration-300 hover:-translate-y-1 rounded-lg"
              >
                <Cards image={value} titleText="Jugar" />
              </div>
            ))}
          </div>
          {/* "Mostrar más" button */}
          <div
            data-aos-easing="linear"
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="100"
            className="flex justify-center mt-9"
          >
            <ButtonLiner title="Mostrar más" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Export NuestrosAtributos component
export default NuestrosAtributos;
