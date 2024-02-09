import NavBara from "@/components/common/navBarr/NavBara";
import NuestraMision from "@/components/NuestraMision";
import NuestrosAtributos from "@/components/NuestrosAtributos";
import NuestrasOfertas from "@/components/NuestrasOfertas";
import Jackpot from "@/components/Jackpot";

import KasinoNingh from "@/components/KasinoNingh";
import Mas from "@/components/Mas";


export default function Home() {
  return (
    <>
    <NavBara />
      <NuestraMision />
      <NuestrosAtributos />
      <Jackpot />
      <KasinoNingh />
      <Mas/>
      <NuestrasOfertas />
      </>
  );
}
