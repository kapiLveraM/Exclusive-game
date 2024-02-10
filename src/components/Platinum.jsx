import React from "react";
import CommonButton from "./common/button/CommonButton";
import Image from "next/image";

const Platinum = () => {
  return (
    
    <div className=" container xl:max-w-[1140px] px-3 mx-auto mt-20 relative">
            <div className="w-[484px] h-[484px] absolute bg-[linear-gradient(306.99deg,_#51C8EF_-13.72%,_#7AF57A_102.02%)] opacity-50 rounded-full blur-[200px] left-[-20%] top-[-30%] z-0 hidden lg:block"></div>
            <div className="w-[484px] h-[484px] absolute bg-[linear-gradient(306.99deg,_#51C8EF_-13.72%,_#7AF57A_102.02%)] opacity-50 rounded-full blur-[200px] right-[-55%] top-[70%] z-0 hidden lg:block"></div>

        <div className="border border-[rgba(255,_255,_255,_0.5)] Nuestras-ofertas-box  rounded-md p-5 lg:py-[79px] lg:px-12 relative z-40">
          <div className="flex flex-wrap flex-col-reverse lg:flex-row justify-between ">
            <div className="lg:w-6/12 xl:w-4/12 ">
              <h3 className="font-Anton text-lg text-white">Platinum</h3>


              <p className=" mt-4 font-medium text-xs sm:text-sm font-Inter text-white max-w-[364px]">
                Diseño totalmente personalizado. Contáctanos para un presupuesto.
              </p>
              <h2 className="font-Anton text-3xl md:text-5xl text-white mt-8">
                Consultar precio
              </h2>
             
              <div className="flex items-start gap-2 mt-4">
            <Image
              loading="lazy"
              width={24}
              height={24}
              src="/assets/icons/nuestrasOfertas/biCheckAll.svg"
              alt="bi_check"
            />
            <p className="font-medium text-xs sm:text-sm leading-6 font-Inter text-white opacity-80 max-w-[387px]">
Personalizable             </p>
          </div>
              <div className=" mt-10">
                <CommonButton type="submit" content="Comprar ahora" />
              </div>
            </div>
            <div className="lg:w-6/12 xl:w-8/12 sm:px-3 flex justify-center lg:justify-end">
              <div className="Nuestras-ofertas-img relative ">
                <div className="w-36 h-36 absolute bg-[linear-gradient(306.99deg,_#51C8EF_-13.72%,_#7AF57A_102.02%)]  rounded-full blur-[70px] right-[17%] top-[5%] hidden lg:block"></div>
                <Image
                  width={602}
                  height={419}
                  loading="lazy"
                  src="/assets/images/platinum/Platinum.webp"
                  alt="Nuestras-ofertas"
                  className=" sm:max-w-[500px] lg:max-w-[602px] w-100 relative z-10 mt-5 lg:mt-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default Platinum;
