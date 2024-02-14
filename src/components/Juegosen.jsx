import React from "react";
import { juegos } from "./common/Helper";
import Cards from "./common/Cards";

// juegos component for displaying live games
const juegosen = () => {
  return (
    <div className="container max-w-[1140px] mx-auto px-3">
      {/* Title for live games section */}
      <p className="font-Anton font-normal text-white xl:text-5xl text-3xl text-center leading-[118%] xl:mb-[60px] mb-10">
        juegos en vivo
        {/* "Live games" */}
      </p>

      {/* Grid for displaying live games */}
      <div className="flex flex-wrap justify-center">
        {juegos.map((value, index) => {
          return (
            <div
              // AOS animation settings
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-easing="linear"
              data-aos-duration="800"
              key={index}
              className="lg:w-4/12 sm:w-6/12 duration-300 hover:-translate-y-1 border-none"
            >
              {/* CommonCardContent component to display game */}
              <Cards image={value} titleText="Reproducir ahora" />
              {/* "Play now" button */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default juegosen;
