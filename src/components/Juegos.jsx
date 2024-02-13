import React from "react";
import { JuegosContent } from "./common/Helper";
import CommonCradContent from "./common/slotsCard/CommonCradContent";

// Juegos component for displaying live games
const Juegos = () => {
  return (
    <div className="container max-w-[1140px] mx-auto px-3">
      {/* Title for live games section */}
      <p className="font-Anton font-normal text-white xl:text-5xl text-3xl text-center leading-[118%] xl:mb-[60px] mb-10">
        Juegos en vivo
        {/* "Live games" */}
      </p>

      {/* Grid for displaying live games */}
      <div className="flex flex-wrap justify-center">
        {JuegosContent.map((value, index) => {
          return (
            <div
              // AOS animation settings
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-easing="linear"
              data-aos-duration="1000"
              key={index}
              className="md:w-4/12 sm:w-6/12 duration-300 hover:-translate-y-1 border-none"
            >
              {/* CommonCardContent component to display game */}
              <CommonCradContent image={value} buttonContent="Reproducir ahora" />
              {/* "Play now" button */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Juegos;
