import NuestraMision from "@/components/NuestraMision";
import NuestrosAtributos from "@/components/NuestrosAtributos";
import NuestrasOfertas from "@/components/NuestrasOfertas";
import Jackpot from "@/components/Jackpot";
import KasinoNingh from "@/components/KasinoNingh";
import Mas from "@/components/Mas";
import Luxury from "@/components/Luxury";
import NavBar from "@/components/common/navBarr/NavBar";
import Platinum from "@/components/Platinum";
import Ellos from "@/components/Ellos";
import Faqs from "@/components/Faqs";
import PropiaLanza from "@/components/PropiaLanza";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import BackToTopButton from "@/components/common/BackToTopButton ";
import PageMataTag from "@/components/PageMataTag";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Home() {
  // Initialize AOS once when component mounts
  useEffect(() => {
    AOS.init({
      once: true, // Set once to true to trigger animation only once
      // Other options...
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Meta tags for the page */}
      <PageMataTag/>

      {/* Button to scroll back to the top of the page */}
      <BackToTopButton />

      {/* Hero section */}
      <Hero/>

      {/* Components for various sections of the page */}
      <NuestraMision />
      <NuestrosAtributos />
      <Jackpot />
      <KasinoNingh />
      <Mas/>
      <NuestrasOfertas />
      <Luxury />
      <Platinum />
      <Ellos />
      <Faqs/>
      <PropiaLanza />

      {/* Footer of the page */}
      <Footer/>
    </div>
  );
}
