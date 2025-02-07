interface ValorProps {
    texto: string
}

export default function Valor(props: ValorProps) {
    return (
        <div className="bg-yellow-800 rounded-md p-4 text-8xl font-black">
            {props.texto}
        </div>
    )
}