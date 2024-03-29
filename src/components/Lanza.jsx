import Image from "next/image";
import React from "react";

// Lanza component for launching platforms
const Lanza = () => {
  return (
    <div
      // AOS animation settings
      data-aos="zoom-in"
      data-aos-delay="300"
      data-aos-easing="linear"
      data-aos-duration="800"
      className="mx-3 rounded-2xl mb-20 xl:mb-36 pb-2"
    >
      {/* Container for platform launch */}
      <div className="container max-w-[1140px] mx-auto relative bg-[url('/assets/images/background/Plataforma.webp')] bg-no-repeat bg-size-full backdrop-blur-[200px] bg-darkBlack rounded-2xl border-[0.5px] border-Menthol">
        {/* Content */}
        <div className="xl:py-24 py-20  px-3 flex items-center justify-center">
          <p className="font-Anton font-normal text-white text-lg lg:text-5xl mb-4 text-center !leading-[128%] max-w-[520px] mx-auto">
            lanza tu propia plataforma en sólo 2 semanas
            {/* "Launch your own platform in just 2 weeks" */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lanza;
