export default function lista() {
    return (
        <div>
            { gerarLista() }
        </div>
    )
}

function gerarLista(final = 10) {
    const lista = []

    for (let i = 1; i <= final; i++) {
        lista.push(<span key={i}>{i},</span>)            
    }

    return lista
}