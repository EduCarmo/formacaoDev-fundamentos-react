import '@/app/globals.css'
import Pagina from "@/components/Pagina";

export default function PaginaSemEstado() {
    let numero = 0;

    function incrementar() {
        numero += 1;
        console.log(numero)
    }

    return (
        <Pagina titulo="Sem Estado" subTitulo="Capítulo Estado">
            <div className='flex flex-col gap-4'>
                <div>
                    <span>Valor: </span>
                    <span>{numero}</span>
                </div>
                <button className="bg-blue-500 p-2 rounded-md"
                onClick={incrementar}>
                    Incrementar
                </button>
            </div>
        </Pagina>
    )
}