import React from "react";
import CommonButtonLiner from "./common/button/CommonButtonLiner";
import NavBar from "./common/navBarr/NavBar";

const Hero = () => {
  return (
    <>
      <div className="bg-[url('/assets/images/background/hero.png')] bg-no-repeat bg-cover">
        <NavBar />
        <div className=" min-h-[85vh] lg:min-h-screen flex items-center relative">
          <div className=" absolute bg-black blur h-14 w-full bottom-[-20px]"></div>
          <div className="container xl:max-w-[1140px] mx-auto px-3">
            <div data-aos="zoom-in" className="flex flex-col items-center">
              <h1 data-aos="fade-up" data-aos-delay="200" data-aos-easing="linear"
     data-aos-duration="1000" className=" uppercase text-4xl sm:text-5xl md:text-xxl  sm:leading-[120%] text-white font-Anton max-w-lg mx-auto text-center">
                Exclusive Games. Pasión por ganar
              </h1>
              <p data-aos="fade-up" data-aos-delay="600" data-aos-easing="linear"
     data-aos-duration="1000" className="text-center font-medium text-xs sm:text-sm font-Inter text-white max-w-[727px] mx-auto opacity-80 mt-4">
                En Exclusive Games somos un equipo apasionado de personas
                dedicados al desarrollo de multiplataformas para juegos de azar.
                A lo largo de nuestra vida consumimos todo tipo de juegos hasta
                que un día decidimos crear los propios.
              </p>
              <div data-aos="fade-up" data-aos-delay="800" data-aos-easing="linear"
     data-aos-duration="1000" className=" mt-10">
                <CommonButtonLiner type="submit" content="Empezar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
