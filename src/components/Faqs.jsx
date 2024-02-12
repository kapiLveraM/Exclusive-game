"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { accordianContent } from "./common/Helper";

function Icon({ id, open }) {
  return (
    <>
      <div className=" relative">
        <svg
          width="20"
          height="4"
          viewBox="0 0 20 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={` absolute top-[50%] translate-x-[-50%] translate-y-[-50%] start-[50%] ${
            id === open ? "" : "rotate-90"
          } w-4  h-1 transition-transform`}
        >
          <path
            d="M19.375 2C19.375 2.29837 19.2565 2.58452 19.0455 2.7955C18.8345 3.00647 18.5484 3.125 18.25 3.125H11.125H8.875H1.75C1.45163 3.125 1.16548 3.00647 0.954505 2.7955C0.743526 2.58452 0.625 2.29837 0.625 2C0.625 1.70163 0.743526 1.41549 0.954505 1.20451C1.16548 0.993529 1.45163 0.875 1.75 0.875H8.875L11.125 0.875206L18.25 0.875C18.5484 0.875 18.8345 0.993529 19.0455 1.20451C19.2565 1.41549 19.375 1.70163 19.375 2Z"
            fill="white"
          />
        </svg>
        <svg
          width="20"
          height="4"
          viewBox="0 0 20 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=" w-4  h-1 transition-transform absolute top-[50%] start-[50%] translate-x-[-50%] translate-y-[-50%]"
        >
          <path
            d="M19.375 2C19.375 2.29837 19.2565 2.58452 19.0455 2.7955C18.8345 3.00647 18.5484 3.125 18.25 3.125H11.125H8.875H1.75C1.45163 3.125 1.16548 3.00647 0.954505 2.7955C0.743526 2.58452 0.625 2.29837 0.625 2C0.625 1.70163 0.743526 1.41549 0.954505 1.20451C1.16548 0.993529 1.45163 0.875 1.75 0.875H8.875L11.125 0.875206L18.25 0.875C18.5484 0.875 18.8345 0.993529 19.0455 1.20451C19.2565 1.41549 19.375 1.70163 19.375 2Z"
            fill="white"
          />
        </svg>
      </div>
    </>
  );
}

const Faqs = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(-1);

  const toggleAccordion = (index) => {
    setIsAccordionOpen(isAccordionOpen === index ? -1 : index);
  };

  return (
    <div className=" relative mt-20 xl:mt-36">
      <div className=" absolute bg-[linear-gradient(306.99deg,_#51C8EF_-13.72%,_#7AF57A_102.02%)] w-[284px] h-[284px] rounded-full blur-[208px] top-[-30%] start-[-10%] pointer-events-none"></div>
      <div className="container max-w-[1152px] mx-auto px-3">
        <h2 className="uppercase font-Anton md:text-5xl text-3xl text-center font-normal text-white leading-[112%]">
          Preguntas más frecuentes
        </h2>
        <div className="max-w-[970px] mx-auto  xl:pt-7">
          {accordianContent.map((value, index) => (
            <Accordion
              key={index}
              className="flex flex-col justify-between border-[0.5px] border-[#80898D] rounded-md px-6 py-4 bg-darkBlue overflow-hidden ease-out transition-all duration-300 mt-8 relative"
              open={isAccordionOpen === index}
              icon={<Icon id={index} open={isAccordionOpen} />}
            >
              <AccordionHeader
                onClick={() => toggleAccordion(index)}
                className=" py-0"
              >
                <h2 className="text-start text-white flex font-Anton font-normal leading-[140%] md:leading-[150%] text-sm mb-0 ">
                  {value.tittle}
                </h2>
              </AccordionHeader>
              <AccordionBody className=" pt-2 pb-0">
                <p className=" font-Inter font-medium text-xs md:text-sm  max-w-[740px] text-white opacity-70 leading-[150%]">
                  {value.content}
                </p>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
