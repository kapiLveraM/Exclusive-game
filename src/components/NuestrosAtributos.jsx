import Image from "next/image";
import React from "react";

const NuestrosAtributos = () => {
  return (
    <div className=" bg-white  clip _path">
      <div className=" container xl:max-w-[1140px] px-3 mx-auto py-28">
        <h2 className=" font-Anton text-3xl md:text-5xl text-black text-center">
          Nuestros Atributos de Marca
        </h2>
        <div className=" flex flex-wrap justify-center md:justify-between mt-[60px] relative">
          {/* <Image loading="lazy"
                        height={273}
                        width={42}
                        src="/assets/icons/nuestrosAtributos/NuestrosArrow.svg"
                      alt="poker"
                    /> */}

          <div className=" md:w-2/6 lg:w-1/4 sm:px-3">
            <div className=" lg:max-w-[263px] text-center flex flex-col justify-center items-center">
              <Image
                loading="lazy"
                height={100}
                width={100}
                src="/assets/icons/nuestrosAtributos/Inteligencia.svg"
                alt="poker"
              />
              <h3 className="font-Anton text-md text-black mt-4">
                Inteligencia
              </h3>
              <p className="font-medium text-xs sm:text-sm font-Inter text-black opacity-80 max-w-[263px]">
                Comprendemos a la perfección los gustos de las personas y el
                mundo del gaming.
              </p>
            </div>
          </div>
          <div className=" md:w-2/6 lg:w-1/4 sm:px-3 my-10 sm:my-0">
            <div className=" lg:max-w-[263px] text-center flex flex-col justify-center items-center">
              <Image
                loading="lazy"
                height={100}
                width={100}
                src="/assets/icons/nuestrosAtributos/Inteligencia.svg"
                alt="poker"
              />
              <h3 className="font-Anton text-md text-black mt-4">
                Proactividad
              </h3>
              <p className="font-medium text-xs sm:text-sm font-Inter text-black opacity-80 max-w-[235px]">
                Somos creadores de cambios que exploran nuevas formas de
                entretenimiento.
              </p>
            </div>
          </div>
          <div className=" md:w-2/6 lg:w-1/4 sm:px-3">
            <div className=" lg:max-w-[263px] text-center flex flex-col justify-center items-center">
              <Image
                loading="lazy"
                height={100}
                width={100}
                src="/assets/icons/nuestrosAtributos/Inteligencia.svg"
                alt="poker"
              />
              <h3 className="font-Anton text-md text-black mt-4">Innovación</h3>
              <p className="font-medium text-xs sm:text-sm font-Inter text-black opacity-80 max-w-[245px]">
                Pensamos fuera de la caja para estar siempre un paso adelante.
              </p>
            </div>
          </div>
        </div>
        <div className=" mt-14 md:mt-24 lg:mt-[150px]">
          <h2 className=" font-Anton text-3xl md:text-5xl text-black text-center">
            Slots{" "}
          </h2>
          <p className="text-center font-medium text-xs sm:text-sm font-Inter text-black max-w-[904px] mx-auto opacity-80 mt-4">
            En Exclusive Games, ofrecemos una selección de más de 600 juegos de
            los principales desarrolladores, como Aristocrat, Amatic, EGT,
            Novomatic, IGT, Playtech, Igrosoft y Tom Horn. Nuestro equipo
            trabaja incansablemente para innovar y ampliar nuestra oferta de
            experiencias, garantizando la máxima seguridad con operaciones
            protegidas por cifrado SSL de 256 bits.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NuestrosAtributos;
