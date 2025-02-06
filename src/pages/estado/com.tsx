import '@/app/globals.css'
import Pagina from "@/components/Pagina";
import { useState } from 'react';

export default function PaginaComEstado() {
    const [numero, setNumero] = useState(0);

    function incrementar() {
        setNumero(numero + 1);
    }

    function limpar() {
        setNumero(0);
    }

    return (
        <Pagina titulo="Com Estado" subTitulo="Capítulo Estado">
            <div className='flex flex-col gap-4'>
                <div>
                    <span>Valor: </span>
                    <span>{numero}</span>
                </div>
                <div className='flex gap-4'>
                    <button className="bg-blue-500 p-2 rounded-md"
                        onClick={incrementar}>
                        Incrementar
                    </button>
                    <button className='bg-red-500 p-2 rounded-md'
                        onClick={limpar}>
                        Limpar
                    </button>
                </div>
            </div>
        </Pagina>
    )
}