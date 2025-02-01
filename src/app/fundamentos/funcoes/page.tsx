export default function Page() {

    function renderizarTitulo() {
        return (
            <div>
                <h1>Título</h1>
                <h2>SubTítulo</h2>
            </div>
        )
    }

    function renderizarConteudo() {
        return (
            <div>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                </ul>
            </div>
        )
    }

    return (
        <div>
            {renderizarTitulo()}
            <hr />
            {renderizarConteudo()}
        </div>
    )
}