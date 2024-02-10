import Image from "next/image";
import React, { useState, useEffect } from "react";
import { BackToTop } from "./icons/common";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={` back_to_top fixed right-6 flex items-center justify-center bottom-6 p-3 bg-black  text-white rounded-full z-50 ${
        isVisible ? "block" : "hidden"
      }`}
      onClick={scrollToTop}
    >
   <BackToTop/>
    </button>
  );
};

export default BackToTopButton;
