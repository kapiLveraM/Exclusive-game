import React from "react";
import Image from "next/image";
import CommonButton from "./common/button/CommonButton";

// Component definition
const NuestrasOfertas = () => {
  return (
    <div id="Ofertas" className="my-20 xl:mt-36 xl:mb-16">
      {/* Container */}
      <div className="container xl:max-w-[1140px] px-3 mx-auto">
        {/* Title */}
        <h2 className="font-Anton text-3xl md:text-5xl text-white text-center">
          Nuestras ofertas
        </h2>
        {/* Subtitle */}
        <p className="mt-3 sm:mt-4 text-center font-medium text-xs sm:text-sm font-Inter text-white max-w-[904px] mx-auto">
          Te ofrecemos las mejores experiencias de juegos para tus clientes.
        </p>
        {/* Content box */}
        <div
          data-aos-easing="linear"
          data-aos-duration="1000"
          data-aos="fade-up"
          className="border border-[rgba(255,_255,_255,_0.5)] Nuestras-ofertas-box mt-7 xl:mt-[60px] rounded-2xl px-5 py-11 lg:p-[57px_15px_30px_40px]"
        >
          <div className="flex flex-wrap justify-between items-center">
            {/* Left side with image */}
            <div className="lg:w-6/12 sm:px-3">
              <div className="Nuestras-ofertas-img relative">
                {/* Background circles */}
                <div className="w-40 h-40 absolute bg-[linear-gradient(306.99deg,_#51C8EF_-13.72%,_#7AF57A_102.02%)]  rounded-full blur-[70px] left-[11%] top-[-7%] hidden lg:block"></div>
                <div className="absolute bg-[#000] h-8 max-w-[500px] w-full blur-sm opacity-20 bottom-[-15%] rounded-[50%] hidden lg:block"></div>
                {/* Image */}
                <Image
                  width={500}
                  height={500}
                  loading="lazy"
                  src="/assets/images/nuestrasofertas/Nuestras-ofertas.webp"
                  alt="Nuestras-ofertas"
                  className="w-100 relative z-30"
                />
              </div>
            </div>
            {/* Right side with details */}
            <div className="lg:w-6/12 xl:w-5/12 mt-16 lg:mt-0">
              {/* Title */}
              <h3 className="font-Anton text-md sm:text-lg text-white">Silver</h3>
              {/* Description */}
              <p className="font-medium text-xs sm:text-sm font-Inter text-white opacity-80 mt-3 sm:mt-4">
                Diseño predeterminado, atractivo y fácil de navegar, tecnología
                HTLM5.
              </p>
              {/* Pricing */}
              <div className="mt-8">
                <h2 className="font-Anton text-3xl md:text-5xl text-white">$5000</h2>
                {/* Features */}
                <div className="flex items-start gap-2 mt-4">
                  {/* Checkmark icon */}
                  <Image
                    loading="lazy"
                    width={24}
                    height={24}
                    src="/assets/icons/nuestrasOfertas/biCheckAll.svg"
                    alt="bi_check"
                  />
                  {/* Feature description */}
                  <p className="font-medium text-xs sm:text-sm font-Inter text-white opacity-80">Disponibles
                    Payku, Pix,
                    Depósitos en Euros, Criptomonedas, Cargas manuales</p>
                </div>
                {/* More features */}
                {/* ... */}
              </div>
              {/* Buy button */}
              <div className="mt-10">
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
