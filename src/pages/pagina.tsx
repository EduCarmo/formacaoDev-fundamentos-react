import '../app/globals.css'
import Pagina from '@/components/Pagina'

export default function TestePagina() {
    
    function executar() {
        console.log('Executando...')
    }

    return (
        <Pagina titulo="Minha Página" subTitulo="Estou na pasta pages">
            <button 
            className="botao"
            onClick={executar}
            >
                Teste
            </button>
        </Pagina>
    )
}