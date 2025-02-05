import Pagina from "@/components/Pagina";

export default function Page() {
    return (
        <Pagina titulo="Minha Aplicação" subTitulo="Melhor app da Web">
            <ul className="list-disc pl-8">
                <li>Ana</li>
                <li>Bia</li>
                <li>Carlos</li>
                <li>Dani</li>
            </ul>
        </Pagina>
    )
}