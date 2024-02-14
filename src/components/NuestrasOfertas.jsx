import React from "react";
import Image from "next/image";
import ButtonWhite from "./common/button/ButtonWhite";

const NuestrasOfertas = () => {
  return (
    <div id="Ofertas" className=" my-20 xl:mt-36 xl:mb-16">
      <div className=" container xl:max-w-[1140px] px-3 mx-auto">
        <h2 className="font-Anton text-3xl md:text-5xl text-white text-center">
          Nuestras ofertas
        </h2>
        <p className="mt-3 sm:mt-4 text-center font-medium text-sm sm:text-base font-Inter text-white max-w-[904px] mx-auto">
          Te ofrecemos las mejores experiencias de juegos para tus clientes.
        </p>
        <div   data-aos-easing="linear"
     data-aos-duration="800"  data-aos="fade-up"  className="border border-MagentaYellow Nuestras-ofertas-box mt-7 xl:mt-[60px] rounded-2xl px-5 py-11 lg:p-[57px_15px_30px_40px]">
          <div className="flex flex-wrap justify-center lg:justify-between items-center">
            <div className="lg:w-6/12 sm:px-3">
              <div className="Nuestras-ofertas-img relative ">
                <div className="w-40 h-40 absolute bg-[linear-gradient(306.99deg,_#51C8EF_-13.72%,_#7AF57A_102.02%)]  rounded-full blur-[70px] left-[11%] top-[-7%] hidden lg:block"></div>
                <div className="absolute bg-black h-8 max-w-[500px] w-full blur-sm opacity-20 bottom-[-15%] rounded-[50%] hidden lg:block"></div>
                <Image
                  width={500}
                  height={500}
                  loading="lazy"
                  src="/assets/images/nuestrasofertas/Nuestras-ofertas.webp"
                  alt="Nuestras-ofertas"
                  className=" w-100 relative z-30"
                />
              </div>
            </div>
            <div className="lg:w-6/12 xl:w-5/12 mt-16 lg:mt-0">
              <h3 className="font-Anton text-md sm:text-lg text-white">Silver</h3>
              <p className="font-medium text-sm sm:text-base font-Inter text-white !opacity-80 mt-3 sm:mt-4">
                Diseño predeterminado, atractivo y fácil de navegar, tecnología
                HTLM5.
              </p>
              <div className=" mt-8">
                <h2 className="font-Anton text-3xl md:text-5xl text-white">$5000</h2>
                <div className="flex items-start gap-2 mt-4 ">
                  <Image loading="lazy" width={24} height={24} src="/assets/images/nuestrasOfertas/biCheckAll.svg" alt="bi_check" />
                  <p className="font-medium text-sm sm:text-base font-Inter text-white !opacity-80">Disponibles
                    Payku, Pix,
                    Depósitos en Euros, Criptomonedas, Cargas manuales</p>
                </div>
                <div className="flex items-start gap-2 mt-3 ">
                  <Image loading="lazy" width={24} height={24} src="/assets/images/nuestrasOfertas/biCheckAll.svg" alt="bi_check" />
                  <p className="font-medium text-sm sm:text-base font-Inter text-white !opacity-80">
                    Control de RTP (controlás qué porcentaje pagar)</p>
                </div>
                <div className="flex items-start gap-2 mt-3 ">
                  <Image loading="lazy" width={24} height={24} src="/assets/images/nuestrasOfertas/biCheckAll.svg" alt="bi_check" />
                  <p className="font-medium text-sm sm:text-base font-Inter text-white !opacity-80">
                    Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalos</p>
                </div>
                <div className="flex items-start gap-2 mt-3 ">
                  <Image loading="lazy" width={24} height={24} src="/assets/images/nuestrasOfertas/biCheckAll.svg" alt="bi_check" />
                  <p className="font-medium text-sm sm:text-base font-Inter text-white !opacity-80">Aplicación para Android y Windows de regalo.</p>
                </div>

                <div className="flex items-start gap-2 mt-3 ">
                  <Image loading="lazy" width={24} height={24} src="/assets/images/nuestrasOfertas/biCheckAll.svg" alt="bi_check" />
                  <p className="font-medium text-sm sm:text-base font-Inter text-white !opacity-80">Tiempo de creación 2 a 3 semanas</p>
                </div>


              </div>
              <div className=" mt-10">
                <ButtonWhite type="submit" title="Comprar ahora" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuestrasOfertas;