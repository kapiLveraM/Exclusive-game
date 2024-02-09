import NavBara from "@/components/common/navBarr/NavBara";
import NuestraMision from "@/components/NuestraMision";
import NuestrosAtributos from "@/components/NuestrosAtributos";
import NuestrasOfertas from "@/components/NuestrasOfertas";


export default function Home() {
  return (
    <>
    <NavBara />
      <NuestraMision />
      <NuestrosAtributos />
      <NuestrasOfertas/>
      </>
  );
}
