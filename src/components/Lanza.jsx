import Image from "next/image";
import React from "react";

const Lanza = () => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-delay="300"
        data-aos-easing="linear"
     data-aos-duration="1000"
      className=" mx-3 rounded-2xl mb-20 xl:mb-36 pb-2"
    >
      <div className="container max-w-[1140px] mx-auto  relative bg-[url('/assets/images/background/plataforma_bg_image.webp')] bg-no-repeat backdrop-blur-3xl bg-black bg-luxury rounded-2xl border-[0.5px] border-[#b5ffb574]">
        <div className="xl:py-24 md:py-20 py-10 flex items-center justify-center ">
          <p className="font-Anton font-normal text-white xl:text-5xl text-3xl mb-4 text-center !leading-[128%] max-w-[520px] mx-auto">
            lanza tu propia plataforma en sólo 2 semanas
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lanza;
