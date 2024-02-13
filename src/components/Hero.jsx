import React from "react";
import ButtonLiner from "./common/button/ButtonLiner";
import NavBar from "./navBar/NavBar";

const Hero = () => {
  return (
    <>
      {/* Hero section background */}
      <div className=" bg-hero bg-no-repeat bg-cover">
        {/* Navigation bar */}
        <NavBar />
        
        {/* Hero content */}
        <div className="min-h-[85vh] lg:min-h-screen flex items-center relative">
          {/* Overlay */}
          <div className="absolute bg-darkBlack h-16 w-full bottom-[-35px] blur-xl"></div>
          
          {/* Container */}
          <div className="container xl:max-w-[1140px] mx-auto px-3">
            {/* Content */}
            <div data-aos="zoom-in" className="flex flex-col items-center">
              {/* Title */}
              <h1
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-easing="linear"
                data-aos-duration="800"
                className="uppercase text-4xl sm:text-5xl md:text-xxl  sm:leading-[120%] text-white font-Anton max-w-lg mx-auto text-center"
              >
                Exclusive Games. Pasión por ganar
              </h1>
              
              {/* Description */}
              <p
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-easing="linear"
                data-aos-duration="800"
                className="text-center font-medium text-sm sm:text-base font-Inter text-white max-w-[727px] mx-auto opacity-80 mt-4"
              >
                En Exclusive Games somos un equipo apasionado de personas
                dedicados al desarrollo de multiplataformas para juegos de azar.
                A lo largo de nuestra vida consumimos todo tipo de juegos hasta
                que un día decidimos crear los propios.
              </p>
              
              {/* Button */}
              <div
                data-aos="fade-up"
                data-aos-delay="800"
                data-aos-easing="linear"
                data-aos-duration="800"
                className="mt-10"
              >
                <ButtonLiner type="submit" title="Empezar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
