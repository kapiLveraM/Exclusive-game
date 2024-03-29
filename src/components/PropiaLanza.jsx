import React from "react";
import GreenButton from "./common/button/GreenButton"; // Importing GreenButton component

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
      <div className="bg-propiaLanza bg-cover sm:bg-[100%_100%] bg-no-repeat flex flex-col items-center justify-center rounded-2xl border-[0.5px] border-MagentaYellow xl:py-[104px] md:py-20 py-20 !px-2">
        {/* Title */}
        <p className="text-white font-normal text-2xl sm:text-lg font-Anton md:mb-10 mb-5 text-center ">
          Lanza tu propia plataforma en sólo 2 semanas
        </p>
        {/* Button component */}
        <GreenButton title="Leer más" />
      </div>
    </div>
  );
};

export default PropiaLanza;
