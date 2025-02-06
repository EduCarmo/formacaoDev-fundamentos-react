import Pagina from "@/components/Pagina";
import { useState } from "react";

export default function Calculadora() {

    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);

    return (
        <Pagina titulo="Calculadora" subTitulo="Capítulo Estado">
            <div className="flex flex-col">
                <div className="flex gap-4">
                    <input
                        type="number"
                        className="campo"
                        placeholder="Digite o primeiro valor"
                        value={numero1}
                        onChange={e => setNumero1(+e.target.value)}
                    />
                    <input
                        type="number"
                        className="campo"
                        placeholder="Digite o segundo valor"
                        value={numero2}
                        onChange={e => setNumero2(+e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-4 mt-4">
                    <span>{numero1} + {numero2} = {numero1 + numero2}</span>
                    <span>{numero1} - {numero2} = {numero1 - numero2}</span>
                    <span>{numero1} * {numero2} = {numero1 * numero2}</span>
                    <span>{numero1} / {numero2} = {numero1 / numero2}</span>
                </div>
            </div>
        </Pagina>
    )
}