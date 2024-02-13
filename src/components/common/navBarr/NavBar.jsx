// Import necessary modules
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeaderCrossIcons, ToggleIcon } from "../icons/common";
import MobileNav from "./MobileNav";
import CommonButton from "../button/CommonButton";

// Define NavBar component
const NavBar = () => {
    // State variables for managing navigation overlay and toggle icon visibility
    const [activeNavOverlay, setActiveNavOverlay] = useState(false);
    const [isToggleIconVisible, setIsToggleIconVisible] = useState(true);

    // Effect to handle body overflow and toggle icon visibility
    useEffect(() => {
        if (activeNavOverlay) {
            document.body.classList.add("overflow-y-hidden"); // Disable vertical scroll when navigation overlay is active
            setIsToggleIconVisible(false); // Hide toggle icon when navigation overlay is active
        } else {
            document.body.classList.remove("overflow-y-hidden"); // Enable vertical scroll when navigation overlay is inactive
            setIsToggleIconVisible(true); // Show toggle icon when navigation overlay is inactive
        }
    }, [activeNavOverlay]);

    // Return JSX for NavBar component
    return (
        <>
            {/* Mobile navigation overlay */}
            <MobileNav
                activeNavOverlay={activeNavOverlay}
                setActiveNavOverlay={setActiveNavOverlay}
            />
            
            {/* Navigation bar */}
            <nav className="!bg-[#FFFFFF1A] py-5 ">
                <div className=" container xl:max-w-[1140px] mx-auto px-3">
                    <div className=" flex justify-between items-center">
                        {/* Logo */}
                        <div>
                            <Link href="#">
                                <Image
                                    loading="lazy"
                                    height={210}
                                    width={43}
                                    src="/assets/icons/main-logo/logo.svg"
                                    alt="logoImg"
                                    className="w-full max-w-[150px] md:max-w-[210px]"
                                />
                            </Link>
                        </div>
                        {/* Navigation links */}
                        <div className="hidden lg:flex gap-7">
                            <Link href="#Hogar" className="opacity-80 hover:opacity-100 transition-all ease-in-out duration-200 font-Inter font-medium text-sm text-white">
                                Hogar
                            </Link>
                            <Link href="#Misión" className="opacity-80 hover:opacity-100 transition-all ease-in-out duration-200 font-Inter font-medium text-sm text-white">
                                Misión
                            </Link>
                            <Link href="#Tragamonedas" className="opacity-80 hover:opacity-100 transition-all ease-in-out duration-200 font-Inter font-medium text-sm text-white">
                                Tragamonedas
                            </Link>
                            <Link href="#Porqué" className="opacity-80 hover:opacity-100 transition-all ease-in-out duration-200 font-Inter font-medium text-sm text-white">
                                Por qué elegirnos
                            </Link>
                            <Link href="#Ofertas" className="opacity-80 hover:opacity-100 transition-all ease-in-out duration-200 font-Inter font-medium text-sm text-white">
                                Ofertas
                            </Link>
                            {/* Other navigation links */}
                            {/* ... */}
                        </div>
                        {/* Button */}
                        <div className="hidden lg:block">
                            <CommonButton type="submit" content="Acceso" />
                        </div>
                        {/* Toggle button for mobile */}
                        <div className="flex items-center lg:hidden relative z-[200] sm:me-0 ">
                            <div className="border_gradient h-[27px] mx-6 lg:mx-3"></div>
                            <button
                                onClick={() => setActiveNavOverlay(!activeNavOverlay)}
                                type="button"
                                className="inline-flex items-center justify-center rounded-md w-[33px]"
                                aria-label="toggle-button"
                            >
                                {isToggleIconVisible ? <HeaderCrossIcons /> : <ToggleIcon />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

// Export NavBar component
export default NavBar;
