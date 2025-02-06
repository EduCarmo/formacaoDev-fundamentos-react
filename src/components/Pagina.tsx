/* eslint-disable @typescript-eslint/no-explicit-any */
import AreaLateral from "./AreaLateral";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import Rodape from "./Rodape";

interface PaginaProps {
    titulo: string;
    subTitulo: string;
    children: any
}

export default function Pagina(props: PaginaProps) {
    const ano = new Date().getFullYear()
    return (
        <div className="flex h-screen">
            <AreaLateral />
            <div className="flex flex-1 flex-col ">
                <Cabecalho
                    titulo={props.titulo}
                    subTitulo={props.subTitulo}
                    className="h-16 bg-zinc-800"
                />
                <Conteudo>
                    {props.children}
                </Conteudo>
                <Rodape
                    textoEsquerdo="Feito por Eduardo"
                    textoDireito={`Todos os direitos reservados ${ano}`} />
            </div>
        </div>
    );
}