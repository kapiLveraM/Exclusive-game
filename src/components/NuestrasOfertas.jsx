import React from "react";
import Image from "next/image";
import CommonButton from "./common/button/CommonButton";

const NuestrasOfertas = () => {
  return (
    <div className=" md:pt-36 md:pb-16">
      <div className=" container xl:max-w-[1140px] px-3 mx-auto">
        <h2 className="font-Anton text-3xl md:text-5xl text-white text-center">
          Nuestras ofertas
        </h2>
        <p className="mt-3 sm:mt-4 text-center font-medium text-xs sm:text-sm font-Inter text-white max-w-[904px] mx-auto">
          Te ofrecemos las mejores experiencias de juegos para tus clientes.
        </p>
        <div className="border border-[rgba(255,_255,_255,_0.5)] Nuestras-ofertas-box mt-7 lg:mt-[60px] rounded-md p-5 lg:p-[57px_15px_30px_40px]">
          <div className="flex flex-wrap justify-between items-center">
            <div className="lg:w-6/12 sm:px-3">
              <div className="Nuestras-ofertas-img relative ">
                <div className=" relative after:absolute after:content-[''] after:h-6 after:w-10/12 after:bottom-[-375px] after:left-[47%] after:max-w-[650px] after:bg-black after:opacity-20 after:blur-sm Nuestras-ofertas-img after:rounded-[50%]"></div>
                <Image
                  width={500}
                  height={500}
                  loading="lazy"
                  src="/assets/images/nuestrasofertas/Nuestras-ofertas.webp"
                  alt="Nuestras-ofertas"
                  className=" w-100 relative z-10"
                />
              </div>
            </div>
            <div className="lg:w-6/12 xl:w-5/12 mt-16 lg:mt-0">
              <h3 className="font-Anton text-md text-white">Silver</h3>
              <p className="font-medium text-xs sm:text-sm font-Inter text-white opacity-80 mt-3 sm:mt-4">
                Diseño predeterminado, atractivo y fácil de navegar, tecnología
                HTLM5.
              </p>
              <div className=" mt-8">
                <h2 className="font-Anton text-3xl md:text-5xl text-white">$5000</h2>
                <div className="flex items-start gap-2 mt-4 ">
                  <Image loading="lazy" width={24} height={24} src="/assets/icons/nuestrasOfertas/biCheckAll.svg" alt="bi_check" />
                  <p className="font-medium text-xs sm:text-sm font-Inter text-white opacity-80">Disponibles
                    Payku, Pix,
                    Depósitos en Euros, Criptomonedas, Cargas manuales</p>
                </div>
                <div className="flex items-start gap-2 mt-3 ">
                  <Image loading="lazy" width={24} height={24} src="/assets/icons/nuestrasOfertas/biCheckAll.svg" alt="bi_check" />
                  <p className="font-medium text-xs sm:text-sm font-Inter text-white opacity-80">
                    Control de RTP (controlás qué porcentaje pagar)</p>
                </div>
                <div className="flex items-start gap-2 mt-3 ">
                  <Image loading="lazy" width={24} height={24} src="/assets/icons/nuestrasOfertas/biCheckAll.svg" alt="bi_check" />
                  <p className="font-medium text-xs sm:text-sm font-Inter text-white opacity-80">
                    Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalos</p>
                </div>
                <div className="flex items-start gap-2 mt-3 ">
                  <Image loading="lazy" width={24} height={24} src="/assets/icons/nuestrasOfertas/biCheckAll.svg" alt="bi_check" />
                  <p className="font-medium text-xs sm:text-sm font-Inter text-white opacity-80">Aplicación para Android y Windows de regalo.</p>
                </div>

                <div className="flex items-start gap-2 mt-3 ">
                  <Image loading="lazy" width={24} height={24} src="/assets/icons/nuestrasOfertas/biCheckAll.svg" alt="bi_check" />
                  <p className="font-medium text-xs sm:text-sm font-Inter text-white opacity-80">Tiempo de creación 2 a 3 semanas</p>
                </div>


              </div>
              <div className=" mt-10">
                <CommonButton type="submit" content="Comprar ahora" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuestrasOfertas;
