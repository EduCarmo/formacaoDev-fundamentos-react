export default function Page() {

    const nome = 'João'
    const idade = 40

    return (
        <div>
            <div>{nome} tem {idade}</div>
            <div>{idade * 3}</div>
            <div>{Math.random()}</div>
        </div>
    );
}