import React, { useEffect, useState } from "react";
import Link from "next/link";
import ButtonWhite from "../common/button/ButtonWhite";

// Define MobileNav component
const MobileNav = ({ activeNavOverlay, setActiveNavOverlay }) => {
  // Effect to handle overflow and remove listener when component unmounts
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023.98px)");

    // Function to handle screen size change
    function handleScreenSizeChange(event) {
      if (event.matches) {
        if (activeNavOverlay) {
          document.body.classList.add("overflow-y-hidden");
        } else {
          document.body.classList.remove("overflow-y-hidden");
        }
      } else {
        document.body.classList.remove("overflow-y-hidden");
      }
    }

    // Add listener and call handler
    mediaQuery.addListener(handleScreenSizeChange);
    handleScreenSizeChange(mediaQuery);

    // Cleanup function to remove listener
    return () => {
      mediaQuery.removeListener(handleScreenSizeChange);
    };
  }, [activeNavOverlay]);

  // State for controlling open/close state of mobile nav items
  const [open, setOpen] = useState();

  // Function to handle opening/closing of mobile nav items
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  // Return JSX for MobileNav component
  return (
    <>
      {/* Mobile navigation overlay */}
      <div
        className={`mobile-nav-overlay md:pt-[7.5rem] ${
          activeNavOverlay ? "left-0" : "-left-full"
        }`}
      >
        <div className="flex flex-col text-white gap-9 xl:gap-5 items-center w-full">
          {/* Navigation links */}
          <Link
            aria-label="AboutUs"
            onClick={() => setActiveNavOverlay(false)}
            href="#Hogar"
            className="mobile-nav-li"
          >
            Hogar
          </Link>
          <Link
            aria-label="AboutUs"
            onClick={() => setActiveNavOverlay(false)}
            href="#Misión"
            className="mobile-nav-li"
          >
            Misión
          </Link>
          <Link
            aria-label="AboutUs"
            onClick={() => setActiveNavOverlay(false)}
            href="#Tragamonedas"
            className="mobile-nav-li"
          >
            Tragamonedas
          </Link>
          <Link
            aria-label="AboutUs"
            onClick={() => setActiveNavOverlay(false)}
            href="#Porqué"
            className="mobile-nav-li"
          >
            Por qué elegirnos
          </Link>
          <Link
            aria-label="AboutUs"
            onClick={() => setActiveNavOverlay(false)}
            href="#Ofertas"
            className="mobile-nav-li"
          >
            Ofertas
          </Link>
          {/* Other navigation links */}
          {/* ... */}
          {/* Common button */}
          <ButtonWhite
            onClick={() => setActiveNavOverlay(false)}
            type="submit"
            title="Acceso"
          />
        </div>
      </div>

      {/* Background overlay */}
      <div
        className={`absolute lg:hidden top-0 left-0 w-full h-full bg-darkBlack lg:bg-transparent backdrop-sepia-[12px z-50 ${
          activeNavOverlay
            ? "pointer-events-auto opacity-1"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setActiveNavOverlay(false)}
      ></div>
    </>
  );
};

// Export MobileNav component
export default MobileNav;
