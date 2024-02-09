import React from "react";
import { JuegosContent } from "./common/Helper";

const Juegos = () => {
  return (
    <div className="container max-w-[1152px] mx-auto px-3">
      <p className=" font-anton font-normal text-white xl:text-5xl text-3xl text-center leading-[118%] xl:mb-[60px] mb-10">
        Juegos en vivo
      </p>

      <div className="flex flex-wrap justify-center">
        {JuegosContent.map((value, index) => {
          return (
            <div
              key={index}
              className="p-2 md:w-4/12 sm:w-6/12 duration-300 hover:-translate-y-1"
            >
              <CommonCardContent image={value} buttonContent="Reproducir ahora" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Juegos;
