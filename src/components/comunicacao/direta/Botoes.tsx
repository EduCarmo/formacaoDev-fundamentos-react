import { useState } from "react";
import Valor from "./Valor";

export default function Botoes() {

    const [nome, setNome] = useState('');

    return (
        <div className="flex flex-col gap-5 bg-green-700 p-4 rounded-md m/2">
            <div className="bg-zinc-400 p-d rounded-md m-2">
                <button className="botao m-2" onClick={() => setNome('Maria')}>Maria</button>
                <button className="botao m-2" onClick={() => setNome('João')}>João</button>
                <button className="botao m-2" onClick={() => setNome('Pedro')}>Pedro</button>
            </div>
            <Valor texto={nome} />
        </div>
    )
}