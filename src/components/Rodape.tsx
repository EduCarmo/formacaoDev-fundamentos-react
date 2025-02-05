interface RodapeProps {
    textoEsquerdo: string
    textoDireito: string
}

export default function Rodape(props: RodapeProps) {
    return (
        <div className="
            flex justify-between items-center h-16
            text-base text-zinc-500 px-10 bg-zinc-900 
            border-t border-zinc-800
        ">
            <span>{props.textoEsquerdo}</span>
            <span>{props.textoDireito}</span>
        </div>
    )
}