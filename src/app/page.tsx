import Pagina from "@/components/Pagina";
import { IconBrandReact } from "@tabler/icons-react";
import React from "react";
export default function Home() {
  return (
    <Pagina
      titulo="Fundamentos React"
      subTitulo="Bem vindo ao mundo do React"
    >
      <div className="
        flex flex-col justify-center items-center
        h-full w-full text-zinc-500
      ">
        <IconBrandReact size={200} stroke={1} />
        <span className="font-black ">Curso fundamentos de React</span>
        <span className="text-sm">Aqui você vai aprender fundamentos sólidos da biblíoteca React</span>
      </div>

    </Pagina>
  );
}
