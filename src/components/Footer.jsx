import Image from "next/image";
import React from "react";
import Link from "next/link";
import { footerContents, footerIcon } from "./common/Helper";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-[#000000] mt-20 xl:mt-36 relative overflow-hidden">
      <div className=" absolute bg-[linear-gradient(306.99deg,_#51C8EF_-13.72%,_#7AF57A_102.02%)] w-[180px] h-[180px] rounded-full blur-[120px] bottom-[6%] end-[-70px] translate-y-[-50%] pointer-events-none"></div>
      <div className=" absolute bg-[linear-gradient(306.99deg,_#51C8EF_-13.72%,_#7AF57A_102.02%)] w-[170px] h-[170px] rounded-full blur-[120px] bottom-[-50%] start-[-10%] translate-y-[-50%] pointer-events-none"></div>
      <div className="container max-w-[1140px] mx-auto px-3 md:pt-16 sm:pt-10 pt-7 pb-10">
        <div className="flex flex-wrap ">
          <div className="xl:w-4/12 w-full flex justify-center flex-col items-center xl:items-start">
            <Image
              src="/assets/icons/main-logo/logo.svg"
              width={210}
              height={43}
              className=" w-full mb-4 max-w-[210px]"
              alt="logo"
            />
            <p className=" text-white font-Anton font-medium text-sm mb-6 opacity-70 text-center xl:text-start max-w-[534px] mx-auto">
              En Exclusive Games somos un equipo apasionado de personas
              dedicadas al desarrollo de multiplataformas para juegos de azar
            </p>
            <div className="flex gap-3 items-center">
              {footerIcon.map((value, index) => {
                return <div key={index}>{value}</div>
              })}
            </div>
          </div>
          <div className="xl:w-8/12 w-full flex  flex-wrap xl:mt-0 mt-5">
            {footerContents.map((value, index) => {
              return (
                <ul
                  className="md:w-4/12 sm:w-6/12 flex flex-col w-full items-start gap-2 xl:ps-10 md:mb-0 mb-5"
                  key={index}
                >
                  <li className=" font-Inter font-bold text-xs sm:text-sm text-white mb-2">
                    {value.tittle}
                  </li>
                  {value.link.map((subValue, subIndex) => {
                    return (
                      <Link href={subValue.path}>
                        <li
                          className="flex items-center gap-2 opacity-70 text-white font-medium text-xs sm:text-sm hover:opacity-100 duration-100 ease-in-out transition-all"
                          key={subIndex}
                        >
                          {subValue.icon} {subValue.content}
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              );
            })}
          </div>
        </div>
      </div>
      <p className="flex items-center justify-center py-5 border-t-[1px] border-[#191919] text-center gap-2 opacity-70 text-white font-medium text-xs sm:text-sm hover:opacity-100 duration-100 ease-in-out transition-all px-2">
        © Juegos exclusivos - Todos los derechos reservados {currentYear}
      </p>
    </div>
  );
};
export default Footer;
