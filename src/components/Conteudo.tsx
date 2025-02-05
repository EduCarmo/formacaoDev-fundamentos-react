/* eslint-disable @typescript-eslint/no-explicit-any */
interface ConteudoProps {
    children: any
}

export default function Conteudo(props: ConteudoProps) {
    return (
        <div className="
            flex items-start rounded-lg p-4
            text-3xl bg-emerald-600 flex-1
        ">
            {props.children}
        </div>
    )
}