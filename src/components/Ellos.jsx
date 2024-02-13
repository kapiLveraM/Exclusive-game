import React from "react";
import { EllosEligieron } from "./common/Helper";
import Crads from "./common/allCards/Crads";

// Component definition
const Ellos = () => {
  return (
    <div className="mt-20 xl:mt-36 pt-2">
      {/* Container */}
      <div className="container xl:max-w-[1140px] px-3 mx-auto">
        {/* Title */}
        <h2
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="800"
          data-aos-delay="300"
          className="font-Anton text-3xl md:text-5xl text-white text-center"
        >
          Ellos eligieron apostar con nosotros{" "}
        </h2>
        {/* Card section */}
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="800"
          data-aos-delay="400"
          className="flex flex-wrap justify-center mt-7 md:mt-14"
        >
          {/* Mapping through the EllosEligieronContent array */}
          {EllosEligieron.map((value, index) => {
            return (
              <div
                key={index}
                className="md:w-4/12 sm:w-6/12 duration-300 hover:-translate-y-1 border-none"
              >
                {/* Rendering Crads component */}
                <Crads image={value} titleText="Rcasinovip" />
              </div>
            );
          })}
        </div>
        {/* Description */}
        <p
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="500"
          className="font-Inter font-semibold text-xs sm:text-sm text-white ma-w-[ 883px] mx-auto text-center mt-6 md:mt-[38px]"
        >
          Clientes satisfechos que confiaron en Exclusive Games y han disfrutado
          de emocionantes experiencias de juego.
          <br />
          Ahora, la próxima apuesta está en tus manos.
          <br />
          Elige ganar. Elige exclusive game.
        </p>
      </div>
    </div>
  );
};

export default Ellos;
