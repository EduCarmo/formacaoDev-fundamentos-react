interface RodapeProps {
    textoEsquerdo: string
    textoDireito: string
}

export default function Rodape(props: RodapeProps) {
    return (
        <div className="
            flex justify-between items-center rounded-lg h-16
            bg-cyan-600 text-sm px-10
        ">
            <span>{props.textoEsquerdo}</span>
            <span>{props.textoDireito}</span>
        </div>
    )
}