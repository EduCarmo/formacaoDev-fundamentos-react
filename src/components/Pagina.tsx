/* eslint-disable @typescript-eslint/no-explicit-any */
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import Menu from "./Menu";
import Rodape from "./Rodape";

export default function Pagina(props: any) {
    const ano = new Date().getFullYear()
    return (
        <div className="flex p-4 gap-4 h-screen">
            <Menu />
            <div className="flex flex-1 flex-col gap-4 ">
                <Cabecalho
                    titulo={props.titulo}
                    subTitulo={props.subTitulo}
                    className="h-24 bg-gradient-to-r from-blue-700 to-zinc-900"
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