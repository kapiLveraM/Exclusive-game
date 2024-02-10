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


export default function Home() {
  return (
    <div className=" overflow-x-hidden">
      <BackToTopButton />
      
    <Hero/>
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
      <Footer/>
      </div>
  );
}
