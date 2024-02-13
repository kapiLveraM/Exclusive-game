import React from "react";
import ButtonLiner from "./common/button/ButtonLiner"; // Importing ButtonLiner component

// PropiaLanza component
const PropiaLanza = () => {
  return (
    // Container with AOS animation attributes and ID
    <div
      data-aos="zoom-in"
      data-aos-easing="linear"
      data-aos-duration="800"
      id="Hogar"
      className="container max-w-[1152px] mx-auto px-3 mt-20 xl:mt-0 xl:pt-[150px]"
    >
      {/* Background container with image and styling */}
      <div className="bg-propiaLanza flex flex-col items-center justify-center rounded-2xl border-[0.5px] border-MagentaYellow xl:py-[104px] md:py-20 py-10 !px-2">
        {/* Title */}
        <p className="text-white font-normal text-2xl sm:text-3xl font-Anton md:mb-10 mb-5 text-center">
          Lanza tu propia plataforma en sólo 2 semanas
        </p>
        {/* Button component */}
        <ButtonLiner title="Leer más" />
      </div>
    </div>
  );
};

export default PropiaLanza;
