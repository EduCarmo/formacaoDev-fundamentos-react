/* eslint-disable @typescript-eslint/no-explicit-any */
interface ConteudoProps {
    children: any
}

export default function Conteudo(props: ConteudoProps) {
    return (
        <div className="
            flex items-start p-4
            text-3xl bg-zinc-900 flex-1
        ">
            {props.children}
        </div>
    )
}