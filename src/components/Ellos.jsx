import React from "react";
import { EllosEligieronContent } from "./common/Helper";
import CommonCradContent from "./common/slotsCard/CommonCradContent";

const Ellos = () => {
  return (
    <div className=" mt-20 xl:mt-36 pt-2">
      <div className=" container xl:max-w-[1140px] px-3 mx-auto">
        <h2 className="font-Anton text-3xl md:text-5xl text-white text-center">
          Ellos eligieron apostar con nosotros{" "}
        </h2>
        <div className="flex flex-wrap justify-center mt-7 md:mt-14">
          {EllosEligieronContent.map((value, index) => {
            return (
              <div
                key={index}
                className=" md:w-4/12 sm:w-6/12 duration-300 hover:-translate-y-1 border-none"
              >
                <CommonCradContent image={value} buttonContent="Rcasinovip" />
              </div>
            );
          })}
              </div>
              <p className=" font-Inter font-semibold text-xs sm:text-sm text-white ma-w-[ 883px] mx-auto text-center mt-6 md:mt-[38px]">
                  Clientes satisfechos que confiaron en Exclusive Games y han disfrutado de emocionantes experiencias de juego.<br/>
Ahora, la próxima apuesta está en tus manos.<br/>
Elige ganar. Elige exclusive game.
              </p>
      </div>
    </div>
  );
};

export default Ellos;
