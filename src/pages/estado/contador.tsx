import Pagina from "@/components/Pagina";
import { IconMinus, IconPlus } from '@tabler/icons-react';
import { useState } from 'react';

export default function Contador() {

    const [numero, setNumero] = useState(0);
    const [delta, setDelta] = useState(1);

    function incrementar() {
        setNumero(numero + delta)
    }

    function decrementar() {
        setNumero(numero - delta)
    }

    function incrementarDelta() {
        setDelta(delta + 1)
    }

    function decrementarDelta() {
        setDelta(delta - 1)
    }



    return (
        <Pagina titulo="Contador" subTitulo="Capítulo Estado">
            <div className='
                flex flex-col justify-center items-center
                w-full h-full
            '>
                <div className='text-7xl font-black'>{numero}</div>
                <div className='flex gap-5'>
                    <button className='bg-blue-500 rounded-full p-4'
                        onClick={decrementar}
                    >
                        <IconMinus size={30} />
                    </button>

                    <button className='bg-blue-700 rounded-full p-4'
                        onClick={incrementar}
                    >
                        <IconPlus size={30} />
                    </button>
                </div>

                <div className='flex gap-4 mt-4'>
                    <button className='bg-purple-500 rounded-full p-4'
                        onClick={decrementarDelta}
                    >
                        <IconMinus size={16} />
                    </button>

                    <span>{delta}</span>

                    <button className='bg-purple-700 rounded-full p-4'
                        onClick={incrementarDelta}>
                        <IconPlus size={16} />
                    </button>
                </div>
            </div>
        </Pagina>
    )
}