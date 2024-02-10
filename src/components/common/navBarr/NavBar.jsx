import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeaderCrossIcons, ToggleIcon } from "../icons/common";
import MobileNav from "./MobileNav";
import CommonButton from "../button/CommonButton";

const NavBar = () => {
    const [activeNavOverlay, setActiveNavOverlay] = useState(false);
    const [isToggleIconVisible, setIsToggleIconVisible] = useState(true);
    useEffect(() => {
        if (activeNavOverlay) {
            document.body.classList.add("overflow-y-hidden");
            setIsToggleIconVisible(false);
        } else {
            document.body.classList.remove("overflow-y-hidden");
            setIsToggleIconVisible(true);
        }
    }, [activeNavOverlay]);

    return (
        <>
            <MobileNav
                activeNavOverlay={activeNavOverlay}
                add
                setActiveNavOverlay={setActiveNavOverlay}
            />
           

                <nav className="!bg-[#FFFFFF1A] py-5 ">
                    <div className=" container xl:max-w-[1140px] mx-auto px-3">
                        <div className=" flex justify-between items-center">
                            <div>
                                <Link href="#">
                                    <Image
                                        loading="lazy"
                                        height={210}
                                        width={43}
                                        src="/assets/icons/main-logo/logo.svg"
                                        alt="logoImg"
                                        className=" w-52"
                                    />
                                </Link>
                            </div>
                            <div className="hidden lg:flex gap-7">
                                <Link
                                    href="#"
                                    className=" font-Inter font-medium text-sm text-white"
                                >
                                    Hogar
                                </Link>
                                <Link
                                    href="#"
                                    className=" font-Inter font-medium text-sm text-white"
                                >
                                    Misión
                                </Link>
                                <Link
                                    href="#"
                                    className=" font-Inter font-medium text-sm text-white"
                                >
                                    Tragamonedas
                                </Link>
                                <Link
                                    href="#"
                                    className=" font-Inter font-medium text-sm text-white"
                                >
                                    Por qué elegirnos
                                </Link>
                                <Link
                                    href="#"
                                    className=" font-Inter font-medium text-sm text-white"
                                >
                                    Ofertas
                                </Link>
                            </div>
                            <div className="hidden md:block">
                                <CommonButton type="submit" content="Acceso" />
                            </div>
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

export default NavBar;
