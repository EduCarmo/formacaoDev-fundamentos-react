import { useState } from "react";
import Pagina from "../../components/Pagina";

export default function PaginaCampoTexto() {
    const [valor, setValor] = useState('');

    function alterar() {
        setValor(`${Math.random()}`);
    }

    // function alterarValor(event: any) {
    //     setValor(event.target.value)
    // }

    console.log(valor)
    return (
        <Pagina titulo="Campo de Texto" subTitulo="Entrada de dados">
            <div className="flex flex-col items-start gap-5">
                <input
                    type="text"
                    className="campo"
                    value={valor}
                    placeholder="Digite algo..."
                    name="campoTexto"
                    onChange={e => setValor(e.target.value)}
                />
                <button className="botao" 
                    onClick={alterar}>
                    Alterar
                </button>
                <span>{valor}</span>
            </div>
        </Pagina>
    )
}