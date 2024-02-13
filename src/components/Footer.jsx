import Image from "next/image"; // Importing Image component from Next.js
import React from "react"; // Importing React library
import Link from "next/link"; // Importing Link component from Next.js
import { FooterLinks, footerIcon } from "./common/Helper"; // Importing FooterLinks and footerIcon from common/Helper
import { FaceBook, Instagram, LinkedIn } from "./common/Icons"; // Importing FaceBook, Instagram, and LinkedIn icons from common/icons/common

// Footer component
const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <div className="bg-black mt-20 xl:mt-36 relative overflow-hidden">
      {" "}
      {/* Container for the footer */}
      {/* Background circles */}
      <div className="absolute bg-gradient-to-bl from-lightSky to-lightGreen w-[180px] h-[180px] rounded-full blur-[120px] bottom-[6%] end-[-70px] translate-y-[-50%] pointer-events-none"></div>
      <div className="absolute bg-gradient-to-bl from-lightSky to-lightGreen w-[170px] h-[170px] rounded-full blur-[120px] bottom-[-50%] start-[-10%] translate-y-[-50%] pointer-events-none"></div>
      {/* Main container */}
      <div className="container max-w-[1140px] mx-auto px-3 md:pt-16 sm:pt-10 pt-7 pb-10">
        <div className="flex flex-wrap">
          {" "}
          {/* Flex container for columns */}
          {/* Left column */}
          <div className="xl:w-4/12 w-full flex justify-center flex-col items-center xl:items-start">
            {" "}
            {/* Logo and description */}
            <Image
              src="/assets/icons/main-logo/logo.svg"
              width={210}
              height={43}
              className="w-full mb-4 max-w-[210px]"
              alt="logo"
            />
            <p className="text-white font-Inter font-medium text-base mb-6 opacity-70 text-center xl:text-start max-w-[534px] mx-auto">
              {" "}
              {/* Description */}
              En Exclusive Games somos un equipo apasionado de personas
              dedicadas al desarrollo de multiplataformas para juegos de azar
            </p>
            {/* Social media links */}
            <div className="flex gap-3 items-center">
              <Link
                href="https://www.instagram.com/accounts/login/"
                className="hover:scale-110 transition-all duration-200 ease-in-out"
              >
                {" "}
                {/* Instagram link */}
                <Instagram />
              </Link>
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                className="hover:scale-110 transition-all duration-200 ease-in-out"
              >
                {" "}
                {/* Facebook link */}
                <FaceBook />
              </Link>
              <Link
                href="https://www.linkedin.com/"
                target="_blank"
                className="hover:scale-110 transition-all duration-200 ease-in-out"
              >
                {" "}
                {/* LinkedIn link */}
                <LinkedIn />
              </Link>
            </div>
          </div>
          {/* Right column */}
          <div className="xl:w-8/12 w-full flex flex-wrap xl:mt-0 mt-5">
            {" "}
            {/* Flex container for footer links */}
            {/* Mapping through footer contents */}
            {FooterLinks.map((value, i) => {
              return (
                <ul
                  className="md:w-4/12 w-6/12 flex flex-col items-start gap-2 xl:ps-10 md:mb-0 mb-5" // Styling for each column
                  key={i}
                >
                  <li className="font-Inter font-bold text-sm sm:text-base text-white mb-2">
                    {" "}
                    {/* Footer section title */}
                    <Link href="">{value.title}</Link>{" "}
                    {/* Link to the section */}
                  </li>
                  {/* Mapping through links in each section */}
                  {value.link.map((subValue, index) => {
                    return (
                      <li key={index}>
                        <Link
                          href={subValue.path}
                          className="flex items-center gap-2 opacity-70 text-white font-medium text-sm sm:text-base hover:opacity-100 duration-100 ease-in-out transition-all"
                        >
                          {" "}
                          {/* Footer link */}
                          {subValue.icon} {subValue.links} {/* Link content */}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </div>
        </div>
      </div>
      {/* Footer bottom */}
      <p className="font-Inter flex items-center justify-center py-5 border-t-[1px] border-EerieBlack text-center gap-2 opacity-50 text-white font-medium text-sm sm:text-base px-2">
        © Juegos exclusivos - Todos los derechos reservados {currentYear}{" "}
        {/* Footer text with current year */}
      </p>
    </div>
  );
};

export default Footer; // Exporting Footer component
