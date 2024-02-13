import Image from "next/image";
import React from "react";
import ButtonLiner from "./common/button/ButtonLiner";

// KasinoNingh component for displaying reasons to choose us
const KasinoNingh = () => {
  return (
    <div
      // Setting the id for anchor linking
      id="Porqué"
      className="bg-white md:bg-transparent bg-kasinoNight bg-no-repeat bg-size-full my-20 py-16  md:my-0 md:py-32"
    >
      {/* Container for content */}
      <div
        // AOS animation settings
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-deley="800"
        data-aos-easing="linear"
        className="container max-w-[1152px] mx-auto px-3 lg:py-24"
      >
        {/* Flex container for aligning content */}
        <div className="flex flex-wrap lg:flex-row flex-col-reverse items-center justify-center">
          {/* Left column with text content */}
          <div className="lg:w-6/12 md:w-7/12 sm:w-10/12 w-full lg:pe-5 lg:mt-0 mt-8">
            <div>
              {/* Title */}
              <p className="font-Anton font-normal text-darkBlack xl:text-5xl text-3xl mb-4 leading-[97%]">
                Por qué elegirnos
                {/* "Why choose us" */}
              </p>
              {/* Description */}
              <p className="font-Inter font-medium md:text-base text-sm text-darkBlue opacity-70 max-w-[515px]">
                Con Exclusive Games tenés Exclusivos beneficios. Te reintegramos
                todo lo invertido en fichas en la moneda que elijas. En
                Exclusive Games siempre sumamos nuevos juegos. Juegos crash, los
                juegos interactivos que más pide la gente. Con Exclusive Games
                empezás a ganar ya! Creamos tu plataforma en solo 2 semanas.
                {/* Explanation of the benefits */}
              </p>
              {/* Button for more information */}
              <div className="mt-6">
                <ButtonLiner title="Aprende más" />
                {/* "Learn more" button */}
              </div>
            </div>
          </div>
          {/* Right column with image */}
          <div className="lg:w-6/12 md:w-7/12 sm:w-10/12 w-full lg:ps-5">
            <Image
              // Loading the image
              loading="lazy"
              src="/assets/images/PorQue/casinoNight.webp"
              width={558}
              height={439}
              className="w-full"
              alt="casinoNight"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KasinoNingh;
